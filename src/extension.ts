import * as vscode from "vscode";
import * as child_process from "child_process";
import * as fs from "fs";

import * as data from "./definition/data";
import definitionByName from "./definition/definition";

interface HoverEntry {
	position: vscode.Range;
	hoverText: string;
	type: "definition" | "property" | "argument";
}

let hovers: HoverEntry[] = [];

let diagnostics: vscode.Diagnostic[] = [];
let posStart: number = 0; // start cursor position of argument in line
let posEnd: number = 0; // end position of last argument in line
let lineNumber: number = 0;
let argumentWord: string = ""; // this is the current processed argument
let argumentIndex: number = 0; // this is the current argument index
let lines: string[] = [];

function parseDocument(document: vscode.TextDocument) {
	if (!document) return;
	if (document.languageId != "wce") return;
	hovers = [];
	diagnostics = [];

	lines = document.getText().split("\n");
	lineNumber = 0;

	for (; lineNumber < lines.length;) {
		parseDefinition();
	}
	diagnosticCollection.set(document.uri, diagnostics);
}

function nextLine(): string {
	if (lineNumber >= lines.length) {
		return "";
	}
	for (; lineNumber < lines.length;) {
		lineNumber++;
		let line = lines[lineNumber];
		if (!parseLine(line)) continue;
		return line;
	}
	return "";
}

function parseLine(line: string): boolean {
	posStart = 0;
	posEnd = 0;
	argumentWord = "";
	argumentIndex = 0;
	if (!line) return false;
	if (line.length === 0) return false;
	while (line[posStart] === " " || line[posStart] === "\t") {
		posStart++;
	}
	if (posStart === line.length) return false;
	posEnd = posStart;
	while (line[posEnd] !== " " && line[posEnd] !== "\t" && posEnd < line.length) {
		argumentWord += line[posEnd];
		posEnd++;
	}
	if (argumentWord.length === 0) return false;

	if (argumentWord == "//") {
		return false;
	}
	return true;
}

function parseArg(line: string): boolean {
	argumentWord = "";
	posStart = posEnd;

	while (line[posStart] === " " || line[posStart] === "\t") {
		posStart++;
	}
	if (posStart === line.length) return false;
	posEnd = posStart
	while (line[posEnd] !== " " && line[posEnd] !== "\t" && posEnd < line.length) {
		argumentWord += line[posEnd];
		posEnd++;
	}

	if (argumentWord.length === 0) return false;
	if (argumentWord.startsWith("//")) {
		/* semantics.push({
			position: new vscode.Range(new vscode.Position(lineNumber, posStart), new vscode.Position(lineNumber, line.length)),
			tokenType: "comment",
		}); */
		return false;
	}

	argumentIndex++;
	return true;
}

function wordRangeCurrent(): vscode.Range {
	return new vscode.Range(new vscode.Position(lineNumber, posStart), new vscode.Position(lineNumber, posEnd));
}


function parseDefinition() {
	let line = nextLine();
	if (line === "") return;
	/* if (argumentWord.startsWith("//")) {
		semantics.push({
			position: new vscode.Range(new vscode.Position(lineNumber, posStart), new vscode.Position(lineNumber, line.length)),
			tokenType: "comment",
		});
		return;
	} */


	switch (argumentWord) {
		case "INCLUDE":
			hovers.push({
				hoverText: "include a file",
				position: wordRangeCurrent(),
				type: "definition",
			});

			if (!parseArg(line)) {
				diagnostics.push({
					message: "include path is missing",
					range: wordRangeCurrent(),
					severity: vscode.DiagnosticSeverity.Error,
				});
				return;
			}

			if (!argumentWord.match(/\".*\"/)) {
				diagnostics.push({
					message: "include path needs to be quoted",
					range: wordRangeCurrent(),
					severity: vscode.DiagnosticSeverity.Error,
				});
				return;
			}

			return;
	}


	const currentDef = definitionByName(argumentWord);
	if (currentDef === null) {
		diagnostics.push({
			message: `unknown definition: ${argumentWord}`,
			range: wordRangeCurrent(),
			severity: vscode.DiagnosticSeverity.Error,
		});
		return;
	}

	let hoverText = currentDef.Note;
	if (currentDef.Description !== "") {
		hoverText += "\n" + currentDef.Description;
	}

	hovers.push({
		hoverText: hoverText,
		position: wordRangeCurrent(),
		type: "definition",
	});


	if (currentDef.HasTag) {
		if (!parseArg(line)) {
			diagnostics.push({
				message: "definition tag is missing",
				range: wordRangeCurrent(),
				severity: vscode.DiagnosticSeverity.Error,
			});
			return;
		}

		if (!argumentWord.match(/\".*\"/)) {
			diagnostics.push({
				message: "definition tag needs to be quoted",
				range: wordRangeCurrent(),
				severity: vscode.DiagnosticSeverity.Error,
			});
			return;
		}

		hovers.push({
			hoverText: "tag for definition",
			position: wordRangeCurrent(),
			type: "definition",
		});

	}
	for (let propIndex = 0; propIndex < currentDef.Properties.length; propIndex++) {
		parseProperty(currentDef.Properties[propIndex]);
	}
	return;
}

function parseProperty(prop: data.PropertyInfo) {
	let line = nextLine();

	let numCount = 0;
	if (argumentWord !== prop.Name) {
		diagnostics.push({
			message: `Expected property ${prop.Name}.`,
			range: wordRangeCurrent(),
			severity: vscode.DiagnosticSeverity.Error,
		});
		return;
	}

	let hoverText = prop.Note;
	if (prop.Description !== "") {
		hoverText += "\n" + prop.Description;
	}

	hovers.push({
		hoverText: hoverText,
		position: wordRangeCurrent(),
		type: "property",
	});


	let propName = argumentWord;


	if (prop.Args == null) {
		return;
	}

	let isManyArgs = false;

	for (let argIndex = 0; argIndex < prop.Args.length; argIndex++) {
		let arg = prop.Args[argIndex];
		if (!parseArg(line)) {
			diagnostics.push({
				message: `Missing required argument ${arg.Name}`,
				range: wordRangeCurrent(),
				severity: vscode.DiagnosticSeverity.Error,
			});
			return;
		}

		let argFormat = arg.Format;
		let expected = "";


		if (argumentWord === "NULL") {
			if (!propName.endsWith("?")) {
				expected = "non-NULL";
			}
		} else {
			if (argFormat.endsWith("...")) {
				isManyArgs = true;
				argFormat = argFormat.slice(0, -3);
			}
			switch (argFormat) {
				case "%s":
					if (typeof argumentWord !== "string") expected = "string";
					break;
				case "%d":

					if (isNaN(parseInt(argumentWord, 10))) expected = "integer";
					numCount = parseInt(argumentWord, 10);
					break;
				case "%0.8e":
					// 0.00000000e+00
					if (!argumentWord.match(/\d\.\d{8}(e[\+\-]\d{2})?/)) expected = "float %0.8e";
					break;
				default:
					expected = "unknown";
					break;
			}
		}
		if (expected !== "") {
			diagnostics.push({
				message: `${argumentWord}: Invalid format for argument ${arg.Name}: expected ${expected}, got ${argumentWord}.`,
				range: wordRangeCurrent(),
				severity: vscode.DiagnosticSeverity.Error,
			});
		}

		let hoverText = "";
		if (arg.Note !== "") {
			hoverText += arg.Note;
		}
		if (arg.Description !== "") {
			hoverText += "\n" + arg.Description;
		}

		hovers.push({
			position: wordRangeCurrent(),
			hoverText: hoverText,
			type: "argument",
		});
	}

	if (parseArg(line) && !isManyArgs) {
		diagnostics.push({
			message: `Too many arguments for property ${prop.Name}.`,
			range: wordRangeCurrent(),
			severity: vscode.DiagnosticSeverity.Error,
		});
		return;
	}


	if (prop.Properties == null) {
		return;
	}
	if (!prop.Properties) {
		return;
	}

	if (numCount == 0) {
		return;
	}

	for (let i = 0; i < numCount; i++) {
		for (let prop2Index = 0; prop2Index < prop.Properties.length; prop2Index++) {
			const prop2 = prop.Properties[prop2Index];
			if (prop2 == null) {
				continue;
			}
			if (!prop2) {
				continue;
			}

			parseProperty(prop2);
		}
	}
}

const hoverProvider = vscode.languages.registerHoverProvider("wce", {
	provideHover(document, position, token) {
		for (const entry of hovers) {
			if (!entry.hoverText) {
				continue;
			}
			if (entry.position.contains(position)) {
				return new vscode.Hover(entry.hoverText);
			}
		}
		return undefined;
	},
});

const diagnosticCollection = vscode.languages.createDiagnosticCollection("wce");

/**
 * Activate the extension.
 */
export function activate(context: vscode.ExtensionContext) {
	const watcher = vscode.workspace.createFileSystemWatcher("**/*.wce");
	const watcherAssets = vscode.workspace.createFileSystemWatcher("**/assets/**/*");

	context.subscriptions.push(
		vscode.workspace.onDidOpenTextDocument(parseDocument),
		vscode.workspace.onDidChangeTextDocument((e) => parseDocument(e.document)),
		vscode.workspace.onDidChangeTextDocument((e) => {
			parseDocument(e.document);
		}),
		watcher.onDidChange((uri) => {
			const config = vscode.workspace.getConfiguration("wce-vscode");
			const isConvertOnSave = config.get<boolean>("convertOnSave", false);
			if (!isConvertOnSave) {
				return;
			}

			const openDocuments = vscode.workspace.textDocuments.filter(doc => doc.uri.toString() === uri.toString());
			if (openDocuments.length > 0) {
				runConvert();
			}
		}),
		watcherAssets.onDidChange((uri) => {
			const config = vscode.workspace.getConfiguration("wce-vscode");
			const isConvertOnSave = config.get<boolean>("convertOnSave", false);
			if (!isConvertOnSave) {
				return;
			}

			runConvert();
		}),
		vscode.window.onDidChangeActiveTextEditor((editor) => {
			if (editor && editor.document.languageId === "wce") {
				parseDocument(editor.document);
			}
		}),
		hoverProvider,
		vscode.workspace.onDidCloseTextDocument((doc) => diagnosticCollection.delete(doc.uri)),
		vscode.commands.registerCommand("wce-vscode.convert", () => {
			runConvert();
		}),
		vscode.workspace.onDidSaveTextDocument((doc) => {
			const config = vscode.workspace.getConfiguration("wce-vscode");
			const isConvertOnSave = config.get<boolean>("convertOnSave", false);
			if (!isConvertOnSave) {
				return;
			}


			if (doc.languageId !== "wce") {
				return;
			}


			runConvert();
		})
	);
}

export function deactivate() { }

function runConvert() {
	const config = vscode.workspace.getConfiguration("wce-vscode");
	let quailPath = config.get<string>("quailPath", "");

	if (quailPath === "") {
		const isWindows = process.platform === "win32";
		const quailExecutable = isWindows ? "quail.exe" : "quail";

		// Use platform-specific command to find executable in PATH
		const cmd = isWindows ? `where ${quailExecutable}` : `which ${quailExecutable}`;

		try {
			const resolvedPath = child_process.execSync(cmd, { encoding: 'utf8' }).trim().split('\n')[0];
			quailPath = resolvedPath;
			console.log(`Resolved quail path: ${quailPath}`);
		} catch (error) {
			vscode.window.showErrorMessage("Quail executable not found in PATH. Please configure wce-vscode.quailPath.");
			return;
		}
	}

	// Check if the resolved path exists
	if (!fs.existsSync(quailPath)) {
		vscode.window.showErrorMessage("Executable path is not a valid file. Please check the path.");
		return;
	}

	const targetPath = config.get<string>("convertTargetPath", "");
	if (targetPath === "") {
		vscode.window.showErrorMessage("Target path is not set. Configure with wce-vscode.convertTargetPath");
		return;
	}

	const targetDir = vscode.Uri.file(targetPath).with({ path: vscode.Uri.file(targetPath).path.replace(/\/[^\/]*$/, '') });

	vscode.workspace.fs.stat(targetDir).then(() => {
		// Directory exists
	}, () => {
		vscode.window.showErrorMessage("Target directory does not exist. Please check the path.");
		return;
	});

	let sourcePath = vscode.workspace.workspaceFolders?.[0].uri.fsPath
	if (sourcePath === undefined) {
		//	vscode.window.showErrorMessage("No workspace file open.");
		//	return;
	}


	let command = `${quailPath} convert ${sourcePath} ${targetPath}`;
	vscode.window.showInformationMessage(`Running: ${command}`);
	const options = { cwd: vscode.workspace.workspaceFolders?.[0].uri.fsPath };

	child_process.exec(command, options, (error, stdout, stderr) => {
		if (error) {
			vscode.window.showErrorMessage(`Error: ${error.message}: ${stdout}`);
			return;
		}
		if (stderr) {
			vscode.window.showErrorMessage(`Stderr: ${stderr}`);
			return;
		}
		vscode.window.showInformationMessage(`Output: ${stdout}`);
	});
}