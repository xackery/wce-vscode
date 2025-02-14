"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const data = __importStar(require("./data"));
let hovers = [];
let semanticCache = [];
function parseDocument(document) {
    hovers = [];
    semanticCache = [];
    const diagnostics = [];
    const definitions = data.definitions;
    const lines = document.getText().split("\n");
    let currentDef = null;
    let propIndex = 0;
    lines.forEach((line, lineNumber) => {
        const trimmed = line.trim();
        const words = trimmed.split(/\s+/);
        if (words.length === 0)
            return;
        let firstWord = words[0];
        if (firstWord.length === 0)
            return;
        ;
        const lineArgs = words.slice(1);
        // check if lineArgs has a //, if so remove elements including
        const commentIndex = lineArgs.findIndex((word) => word.startsWith("//"));
        if (commentIndex !== -1) {
            lineArgs.splice(commentIndex);
        }
        if (line.indexOf("//") !== -1) {
            const commentIndex = line.indexOf("//");
            const comment = line.slice(commentIndex);
            semanticCache.push({
                position: new vscode.Range(new vscode.Position(lineNumber, commentIndex), new vscode.Position(lineNumber, commentIndex + comment.length)),
                tokenType: "comment",
            });
        }
        if (line.startsWith("//"))
            return;
        if (currentDef === null) {
            for (let defIndex = 0; defIndex < definitions.length; defIndex++) {
                if (firstWord !== definitions[defIndex].name) {
                    continue;
                }
                currentDef = definitions[defIndex];
                propIndex = 0;
                hovers.push({
                    position: new vscode.Range(new vscode.Position(lineNumber, 0), new vscode.Position(lineNumber, firstWord.length)),
                    hoverText: currentDef.description,
                    type: "definition",
                });
                semanticCache.push({
                    position: new vscode.Range(new vscode.Position(lineNumber, 0), new vscode.Position(lineNumber, firstWord.length)),
                    tokenType: "keyword",
                });
                if (currentDef.hasTag) {
                    if (!lineArgs.length) {
                        diagnostics.push({
                            message: "Definition tag is missing.",
                            range: new vscode.Range(new vscode.Position(lineNumber, 0), new vscode.Position(lineNumber, 6)),
                            severity: vscode.DiagnosticSeverity.Error,
                        });
                        continue;
                    }
                    if (!lineArgs[0].match(/\".*\"/)) {
                        diagnostics.push({
                            message: "Definition tag needs to be quoted.",
                            range: new vscode.Range(new vscode.Position(lineNumber, 0), new vscode.Position(lineNumber, 6)),
                            severity: vscode.DiagnosticSeverity.Error,
                        });
                        continue;
                    }
                    hovers.push({
                        position: new vscode.Range(new vscode.Position(lineNumber, 0), new vscode.Position(lineNumber, firstWord.length)),
                        hoverText: "Tag for definition.",
                        type: "definition",
                    });
                }
                break;
            }
            if (currentDef === null) {
                diagnostics.push({
                    message: "Unknown definition: " + firstWord + ".",
                    range: new vscode.Range(new vscode.Position(lineNumber, 0), new vscode.Position(lineNumber, firstWord.length)),
                    severity: vscode.DiagnosticSeverity.Error,
                });
            }
            return;
        }
        const prop = currentDef.properties[propIndex];
        if (!prop) {
            propIndex = 0;
            currentDef = null;
            return;
        }
        if (firstWord !== prop.name) {
            diagnostics.push({
                message: `Expected property ${prop.name}.`,
                range: new vscode.Range(new vscode.Position(lineNumber, 0), new vscode.Position(lineNumber, firstWord.length)),
                severity: vscode.DiagnosticSeverity.Error,
            });
            return;
        }
        hovers.push({
            position: new vscode.Range(new vscode.Position(lineNumber, 0), new vscode.Position(lineNumber, firstWord.length)),
            hoverText: prop.description,
            type: "property",
        });
        semanticCache.push({
            position: new vscode.Range(new vscode.Position(lineNumber, 0), new vscode.Position(lineNumber, firstWord.length + 1)),
            tokenType: "property",
        });
        let argPos = line.indexOf(firstWord) + firstWord.length + 1;
        for (let argIndex = 0; argIndex < prop.args.length; argIndex++) {
            let arg = prop.args[argIndex];
            if (argIndex >= lineArgs.length) {
                diagnostics.push({
                    message: `Missing argument ${arg.name}`,
                    range: new vscode.Range(new vscode.Position(lineNumber, 0), new vscode.Position(lineNumber, line.length)),
                    severity: vscode.DiagnosticSeverity.Error,
                });
                continue;
            }
            const argRange = new vscode.Range(new vscode.Position(lineNumber, argPos), new vscode.Position(lineNumber, argPos + lineArgs[argIndex].length));
            const argValue = lineArgs[argIndex];
            const argFormat = arg.format;
            let expected = "";
            if (argValue === "NULL") {
                if (!firstWord.endsWith("?")) {
                    expected = "non-NULL";
                }
                semanticCache.push({
                    position: argRange,
                    tokenType: "number",
                });
            }
            else {
                switch (argFormat) {
                    case "%s":
                        if (typeof argValue !== "string")
                            expected = "string";
                        semanticCache.push({
                            position: argRange,
                            tokenType: "string",
                        });
                        break;
                    case "%d":
                        if (isNaN(parseInt(argValue, 10)))
                            expected = "integer";
                        semanticCache.push({
                            position: argRange,
                            tokenType: "number",
                        });
                        break;
                    case "%f":
                        if (!isNaN(parseFloat(argValue)))
                            expected = "float";
                        semanticCache.push({
                            position: argRange,
                            tokenType: "number",
                        });
                        break;
                    default:
                        expected = "unknown";
                        semanticCache.push({
                            position: argRange,
                            tokenType: "unknown",
                        });
                        break;
                }
            }
            if (expected !== "") {
                diagnostics.push({
                    message: `${currentDef.name}.${firstWord}: Invalid format for argument ${arg.name}: expected ${expected}, got ${argValue}.`,
                    range: argRange,
                    severity: vscode.DiagnosticSeverity.Error,
                });
            }
            hovers.push({
                position: argRange,
                hoverText: arg.description,
                type: "argument",
            });
            argPos += lineArgs[argIndex].length + 1;
        }
        if (lineArgs.length > prop.args.length) {
            diagnostics.push({
                message: `Too many arguments for property ${prop.name}.`,
                range: new vscode.Range(new vscode.Position(lineNumber, 0), new vscode.Position(lineNumber, line.length)),
                severity: vscode.DiagnosticSeverity.Error,
            });
        }
        propIndex++;
    });
    diagnosticCollection.set(document.uri, diagnostics);
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
class WCESemanticTokensProvider {
    provideDocumentSemanticTokens(document) {
        const builder = new vscode.SemanticTokensBuilder(legend);
        for (const entry of semanticCache) {
            builder.push(entry.position, entry.tokenType);
        }
        return builder.build();
    }
}
const diagnosticCollection = vscode.languages.createDiagnosticCollection("wce");
/**
 * Activate the extension.
 */
function activate(context) {
    context.subscriptions.push(vscode.workspace.onDidOpenTextDocument(parseDocument), vscode.workspace.onDidChangeTextDocument((e) => parseDocument(e.document)), hoverProvider, vscode.workspace.onDidCloseTextDocument((doc) => diagnosticCollection.delete(doc.uri)), vscode.languages.registerDocumentSemanticTokensProvider({ language: "wce" }, new WCESemanticTokensProvider(), new vscode.SemanticTokensLegend(["keyword", "property", "number", "null", "string", "comment"])));
}
function deactivate() { }
//# sourceMappingURL=extension.js.map