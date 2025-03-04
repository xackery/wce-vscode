import * as vscode from "vscode";

import * as data from "./definition/data";
import definitionByName from "./definition/definition";
import { log } from "console";
import * as child_process from "child_process";

interface HoverEntry {
	position: vscode.Range;
	hoverText: string;
	type: "definition" | "property" | "argument";
}

let hovers: HoverEntry[] = [];

interface TokenEntry {
	position: vscode.Range;
	tokenType: string;
}

let semantics: TokenEntry[] = [];
let currentDef: data.DefinitionInfo | null = null;
let propIndex = 0;
let propCount = 1; // this value is tweaked when a NUM prop sets it
let propMax = 1;
let diagnostics: vscode.Diagnostic[] = [];
let posStart: number = 0; // start cursor position of argument in line
let posEnd: number = 0; // end position of last argument in line
let lineNumber: number = 0;
let argumentWord: string = ""; // this is the current processed argument
let argumentIndex: number = 0; // this is the current argument index

function parseDocument(document: vscode.TextDocument) {
	if (document.languageId != "wce") return;
	hovers = [];
	semantics = [];
	diagnostics = [];
	currentDef = null;

	const lines = document.getText().split("\n");

	lines.forEach((line, lineNumberIndex) => {
		lineNumber = lineNumberIndex;
		parseLine(line);
		return;
	});

	diagnosticCollection.set(document.uri, diagnostics);
}

function parseLine(line: string) {
	posStart = 0;
	posEnd = 0;
	argumentWord = "";
	argumentIndex = 0;

	// iterate line until we find a non space/tab
	while (line[posStart] === " " || line[posStart] === "\t") {
		posStart++;
	}
	if (posStart === line.length) return;
	posEnd = posStart;
	while (line[posEnd] !== " " && line[posEnd] !== "\t" && posEnd < line.length) {
		argumentWord += line[posEnd];
		posEnd++;
	}
	if (argumentWord.length === 0) return;

	if (argumentWord == "//") {
		/* semantics.push({
			position: new vscode.Range(new vscode.Position(lineNumber, posStart), new vscode.Position(lineNumber, line.length)),
			tokenType: "comment",
		}); */

		return;
	}


	if (currentDef === null) {
		parseDefinition(line);
		return;
	}

	parseProperty(line);
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


function parseDefinition(line: string) {
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

			semantics.push({
				position: wordRangeCurrent(),
				tokenType: "keyword",
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


	let tmpDef = definitionByName(argumentWord);
	if (tmpDef === null) {
		diagnostics.push({
			message: `unknown definition: ${argumentWord}`,
			range: wordRangeCurrent(),
			severity: vscode.DiagnosticSeverity.Error,
		});
		return;
	}
	currentDef = tmpDef;
	propIndex = 0;
	propCount = 1;
	propMax = 1;


	let hoverText = currentDef.Note;
	if (currentDef.Description !== "") {
		hoverText += "\n" + currentDef.Description;
	}

	hovers.push({
		hoverText: hoverText,
		position: wordRangeCurrent(),
		type: "definition",
	});

	semantics.push({
		position: wordRangeCurrent(),
		tokenType: "keyword",
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


		semantics.push({
			position: wordRangeCurrent(),
			tokenType: "string",
		});
	}
	return;
}

function parseProperty(line: string) {
	if (currentDef === null) return;
	const prop = currentDef.Properties[propIndex];
	if (!prop) {
		propIndex = 0;
		currentDef = null;
		propCount = 1;
		propMax = 1;
		return;
	}

	if (argumentWord !== prop.Name) {
		diagnostics.push({
			message: `Expected property ${prop.Name}.`,
			range: wordRangeCurrent(),
			severity: vscode.DiagnosticSeverity.Error,
		});
		currentDef = null;
		return;
	}

	let hoverText = prop.Note;
	if (prop.Description !== "") {
		hoverText += "\n" + prop.Description;
	}
	if (propMax > 1) {
		let propIndex = propMax - propCount - 1;
		hoverText = `#${propIndex}: ${hoverText}`;
	}

	hovers.push({
		hoverText: hoverText,
		position: wordRangeCurrent(),
		type: "property",
	});
	semantics.push({
		position: wordRangeCurrent(),
		tokenType: "property",
	});

	let propName = argumentWord;


	if (prop.Args == null) {

		propCount++;
		if (propCount >= propMax) {
			propIndex++;

			const nextProp = currentDef.Properties[propIndex];
			propCount = 1;
			propMax = 1;
			if (!nextProp) {
				propIndex = 0;
				currentDef = null;
				return;
			}
		}
		return;
	}

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


		const argFormat = arg.Format;
		let expected = "";

		if (argumentWord === "NULL") {
			if (!propName.endsWith("?")) {
				expected = "non-NULL";
			}
			semantics.push({
				position: wordRangeCurrent(),
				tokenType: "number",
			});
		} else {
			switch (argFormat) {
				case "%s":
					if (typeof argumentWord !== "string") expected = "string";
					semantics.push({
						position: wordRangeCurrent(),
						tokenType: "string",
					});
					break;
				case "%d":
					if (isNaN(parseInt(argumentWord, 10))) expected = "integer";
					semantics.push({
						position: wordRangeCurrent(),
						tokenType: "number",
					});
					if (prop.Properties != null && prop.Properties.length > 0) {
						propMax = parseInt(argumentWord, 10) + 1;
					}
					break;
				case "%0.8f":
					// 0.00000000e+00
					if (!argumentWord.match(/\d\.\d{8}e[\+\-]\d{2}/)) expected = "float";
					semantics.push({
						position: wordRangeCurrent(),
						tokenType: "number",
					});
					break;

				case "%f":
					if (!isNaN(parseFloat(argumentWord))) expected = "float";
					semantics.push({
						position: wordRangeCurrent(),
						tokenType: "number",
					});
					break;
				default:
					expected = "unknown";
					semantics.push({
						position: wordRangeCurrent(),
						tokenType: "unknown",
					});
					break;
			}
		}
		if (expected !== "") {
			diagnostics.push({
				message: `${currentDef.Name}.${argumentWord}: Invalid format for argument ${arg.Name}: expected ${expected}, got ${argumentWord}.`,
				range: wordRangeCurrent(),
				severity: vscode.DiagnosticSeverity.Error,
			});
		}

		let hoverText = arg.Description;
		if (propMax > 1) {
			let propIndex = propMax - propCount - 1;
			hoverText = `#${propIndex}: ${hoverText}`;
		}

		hovers.push({
			position: wordRangeCurrent(),
			hoverText: hoverText,
			type: "argument",
		});
	}

	if (parseArg(line)) {
		diagnostics.push({
			message: `Too many arguments for property ${prop.Name}.`,
			range: wordRangeCurrent(),
			severity: vscode.DiagnosticSeverity.Error,
		});
		return;
	}

	propCount++;
	if (propCount >= propMax) {
		propIndex++;

		const nextProp = currentDef.Properties[propIndex];
		propCount = 1;
		propMax = 1;
		if (!nextProp) {
			propIndex = 0;
			currentDef = null;
			return;
		}
	}
}

/**
 * Provides hover tooltips for SOMEDEF, SOMEPROP, and their arguments.
 */
const hoverProvider = vscode.languages.registerHoverProvider("wce", {
	provideHover(document, position, token) {
		for (const entry of hovers) {
			if (entry.position.contains(position)) {
				return new vscode.Hover(entry.hoverText);
			}
		}
		return undefined;
	},
});

const legend = new vscode.SemanticTokensLegend(["keyword", "property", "number", "null", "string", "comment"]);

class WCESemanticTokensProvider implements vscode.DocumentSemanticTokensProvider {
	provideDocumentSemanticTokens(
		document: vscode.TextDocument
	): vscode.ProviderResult<vscode.SemanticTokens> {
		const builder = new vscode.SemanticTokensBuilder(legend);

		for (const entry of semantics) {
			builder.push(entry.position, entry.tokenType);
		}

		return builder.build();
	}
}


const diagnosticCollection = vscode.languages.createDiagnosticCollection("wce");

/**
 * Activate the extension.
 */
export function activate(context: vscode.ExtensionContext) {
	const semanticTokensProvider = new WCESemanticTokensProvider();
	const legend = new vscode.SemanticTokensLegend(["keyword", "property", "number", "null", "string", "comment"]);

	context.subscriptions.push(
		vscode.workspace.onDidOpenTextDocument(parseDocument),
		vscode.workspace.onDidChangeTextDocument((e) => parseDocument(e.document)),
		vscode.workspace.onDidChangeTextDocument((e) => {
			parseDocument(e.document);
			vscode.languages.registerDocumentSemanticTokensProvider(
				{ language: "wce" },
				semanticTokensProvider,
				legend
			);
		}),
		vscode.window.onDidChangeActiveTextEditor((editor) => {
			if (editor) {
				parseDocument(editor.document);
				vscode.languages.registerDocumentSemanticTokensProvider(
					{ language: "wce" },
					semanticTokensProvider,
					legend
				);
			}
		}),
		hoverProvider,
		vscode.workspace.onDidCloseTextDocument((doc) => diagnosticCollection.delete(doc.uri)),
		vscode.languages.registerDocumentSemanticTokensProvider(
			{ language: "wce" },
			semanticTokensProvider,
			legend
		),
		vscode.commands.registerCommand("wce-vscode.convert", () => {
			runConvert();
		}),
		vscode.workspace.onDidSaveTextDocument((doc) => {
			const config = vscode.workspace.getConfiguration("wce-vscode");
			const isConvertOnSave = config.get<boolean>("convertOnSave", false);
			if (!isConvertOnSave) {
				return;
			}

			const quailPath = config.get<string>("quailPath", "");
			if (quailPath === "") {
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
	const quailPath = config.get<string>("quailPath", "");
	if (quailPath === "") {
		vscode.window.showErrorMessage("Quail path is not set. Configure with wce-vscode.quailPath");
		return;
	}

	if (!vscode.workspace.fs.stat(vscode.Uri.file(quailPath)).then(() => true).then(undefined, () => false)) {
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