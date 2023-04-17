/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import {
	createConnection,
	TextDocuments,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	Definition,
	Location,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	InitializeResult,
	Position,

} from 'vscode-languageserver/node';

import { teCompletionItems } from './completionItems/te';
import { fcCompletionItems } from './completionItems/fc';
import { ifCompletionItems } from './completionItems/if';
import { sptCompletionItems } from './completionItems/spt';

import {
	TextDocument,
} from 'vscode-languageserver-textdocument';

import * as path from 'path';
import * as fs from 'fs';
import { CharStream, CharStreams, CommonTokenStream, FileStream, ParseTreeWalker } from 'antlr4';
import SELinuxLexer from './antlr/SELinuxLexer';
import SELinuxParser from './antlr/SELinuxParser';
import { SymbolTable } from 'antlr4-c3';
import SELinuxListener from './antlr/SELinuxListener';

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

//global settings
let someSetting: string;

// Create a simple text document manager.
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;

connection.onInitialize( async (params: InitializeParams) => {
	const capabilities = params.capabilities;

	// Does the client support the `workspace/configuration` request?
	// If not, we fall back using global settings.
	hasConfigurationCapability = !!(
		capabilities.workspace && !!capabilities.workspace.configuration
	);
	hasWorkspaceFolderCapability = !!(
		capabilities.workspace && !!capabilities.workspace.workspaceFolders
	);
	hasDiagnosticRelatedInformationCapability = !!(
		capabilities.textDocument &&
		capabilities.textDocument.publishDiagnostics &&
		capabilities.textDocument.publishDiagnostics.relatedInformation
	);

	someSetting = params.initializationOptions.someSetting;
	connection.console.log(someSetting);

	const result: InitializeResult = {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental,
			// Tell the client that this server supports code completion.
			completionProvider: {
				resolveProvider: true,
			},
			definitionProvider: true
		}
	};
	if (hasWorkspaceFolderCapability) {
		result.capabilities.workspace = {
			workspaceFolders: {
				supported: true
			}
		};
	}
	return result;
});

connection.onInitialized(() => {
	if (hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(DidChangeConfigurationNotification.type, undefined);
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			connection.console.log('Workspace folder change event received.');
		});
	}
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
	//TO-DO: Update Parser
});

/*
// The example settings
interface ExampleSettings {
	maxNumberOfProblems: number;
}

function getDocumentSettings(resource: string): Thenable<ExampleSettings> {
	if (!hasConfigurationCapability) {
		return Promise.resolve(globalSettings);
	}
	let result = documentSettings.get(resource);
	if (!result) {
		result = connection.workspace.getConfiguration({
			scopeUri: resource,
			section: 'seLinuxHelper'
		});
		documentSettings.set(resource, result);
	}
	return result;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: ExampleSettings = { maxNumberOfProblems: 1000 };
let globalSettings: ExampleSettings = defaultSettings;

// Cache the settings of all open documents
const documentSettings: Map<string, Thenable<ExampleSettings>> = new Map();

connection.onDidChangeConfiguration(change => {
	if (hasConfigurationCapability) {
		// Reset all cached document settings
		documentSettings.clear();
	} else {
		globalSettings = <ExampleSettings>(
			(change.settings.languageServerExample || defaultSettings)
		);
	}
});
*/

// Only keep settings for open documents
documents.onDidClose(e => {
	//documentSettings.delete(e.document.uri);
});
connection.onDidChangeWatchedFiles(_change => {
	// Monitored files have change in VSCode
	connection.console.log('We received an file change event');
});


/*	This function identifies the hovered word and seperates it from any surrounding text
*	INPUTS: document: TextDocument of hovered word
			position: Position of hovered word in Text Document
*	OUTPUTS: String representing the hovered word seperated from any adjoining punctuation 
*				or separator markings 
*/
function getWord(document: TextDocument, position: Position)
{
	const start = {
		line: position.line,
		character: 0,
	};
	const end = {
	line: position.line + 1,
	character: 0,
	};

    const line = document.getText({ start, end });
	//check if line is a comment, if so return empty word
	if(line.charAt(0) === '#'){
		return "";
	}

	const text = line.replace(/[^\w\\$\\-]/g, " ");
    const index = document.offsetAt(position) - document.offsetAt(start);
	const first = text.lastIndexOf(' ', index);
	const last = text.indexOf(' ', index);
	const word = text.substring(first !== -1 ? first+1 : 0, last !== -1 ? last : text.length - 1);
	return word;
}



/*	This function identifies whether a term is not a keyword and needs a definition
*	INPUTS: String search term 
*			Uri of file location containing search term
*	OUTPUTS: Boolean Value 
*				True: likely to have a definition
*				False: keyword, whitespace, or other invalid search teram
*/
function needsDefinition(uri: string, searchTerm: string){

	if( searchTerm === ' ' || searchTerm === ''){
		return false;
	}

	//get relevant list of keywords for the filetype
	const fileExtension = path.extname(uri);

	let searchList = null;
	switch (fileExtension){
		case ".te": searchList = teCompletionItems;	break;
		case ".if": searchList =  ifCompletionItems; break;
		case ".spt": searchList =  sptCompletionItems; break;
		case ".fc": searchList = fcCompletionItems; break;
	}

	if (searchList !== null){
		//identify if search term is a known keyword
		for (const index in searchList) {
			if(searchList[index].label === searchTerm){
				return false;
			}
		}
	}
	//somehow not in correct file type
	else {
		return false;
	}
	return true;
}

async function parseFile(filePath: string): Promise<void> {
	//const input = "your text to parse here"\\
	const chars = new CharStream(fs.readFileSync(filePath, 'utf-8')); 
	const lexer = new SELinuxLexer(chars);
	const tokens = new CommonTokenStream(lexer);
	const parser = new SELinuxParser(tokens);
	const listener = new SELinuxListener();
	const tree = parser.file();
	
	let walker = new ParseTreeWalker();
	walker.walk(listener, tree);
  }

//This handler provides the definition location on hover over a word
connection.onDefinition(( {textDocument, position }): Definition | undefined => {

	const document = documents.get(textDocument.uri);
	if(document === undefined){
		  return undefined;
	}
	const searchTerm = getWord(document, position);

	if( needsDefinition(document.uri, searchTerm)){
		//TO_DO: Connect to parser by the search term
		//Parser should provide at Location object of the document uri and line position of start and end of defintiion
		//let input = CharStreams.fromString(document.getText());
		//let lexer = new SELinuxLexer(input);
		//let parser = new SELinuxParser(new CommonTokenStream(lexer));
		//let listener = new SELinuxListener();
		//parser._parseListeners
		//let parseTree = parser.file();

		//let pos = position;
		//let position = computeTokenPosition(parseTree, parser.inputStream, { line: pos.line + 1, column: pos.character });
		//let symbolTableVisitor = new SymbolTableVisitor(textDocument.uri);

		return Location.create( document.uri, {
			start: { line: 2, character: 5 },
			end: { line: 4, character: 6 }
			});
	}

	return undefined;
});


// This handler provides the initial list of the completion items.
connection.onCompletion(
	(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
		// The pass parameter contains the position of the text document in
		// which code complete got requested. For the example we ignore this
		// info and always provide the same completion items.
		const uri = _textDocumentPosition.textDocument.uri;

		const fileExtension = path.extname(uri);
		//connection.console.log(fileExtension);
		switch (fileExtension){
			case ".te": return teCompletionItems;
			case ".if": return ifCompletionItems;
			case ".spt": return sptCompletionItems;
			case ".fc": return fcCompletionItems;
		}
		
		//not my circus not my monkeys
		return [];
	}
);

// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve(
	(item: CompletionItem): CompletionItem => {
		switch (item.data) {
			case 1: item.detail = "alias"; break; //documentation for item data 1
		}
		return item;
	}
);

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();
