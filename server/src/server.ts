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
	Hover,
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
//import * as fs from 'fs';
//import * as glob from 'glob';

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;

connection.onInitialize((params: InitializeParams) => {
	const capabilities = params.capabilities;

	//params.capabilities.documentSelector = true;
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

	const result: InitializeResult = {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental,
			// Tell the client that this server supports code completion.
			completionProvider: {
				resolveProvider: true,
			},
			hoverProvider: true,
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

// The example settings
interface ExampleSettings {
	maxNumberOfProblems: number;
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


// Only keep settings for open documents
documents.onDidClose(e => {
	documentSettings.delete(e.document.uri);
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
	//validateTextDocument(change.document);
});


connection.onDidChangeWatchedFiles(_change => {
	// Monitored files have change in VSCode
	connection.console.log('We received an file change event');
});


//This function identifies the hovered word and seperates it from any surrounding text
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

    const text = document.getText({ start, end }).replace(/[^\w\\$\\-]/g, " ");
    const index = document.offsetAt(position) - document.offsetAt(start);
	const first = text.lastIndexOf(' ', index);
	const last = text.indexOf(' ', index);
	const word = text.substring(first !== -1 ? first+1 : 0, last !== -1 ? last : text.length - 1);
	return word;
}

//This handler will provide hover information from the server
connection.onHover(({ textDocument, position }): Hover | undefined => {
	
    const document = documents.get(textDocument.uri);


	if(document == undefined)
		return undefined;

	const word = getWord(document, position);
	
    if (word !== '') {

		//TO-DO: Add filter to only search if it is something that will have a definition
		//TO-DO: Connect to Parser to search by word and then display the definition
		return {
		contents: {
			kind: 'markdown',
			value: `${word}`,
		},
		};
    }

    return undefined;
});


//This handler provides the definition location on hover over a word
connection.onDefinition(( {textDocument, position }): Definition | undefined => {

	const document = documents.get(textDocument.uri);
	if(document == undefined)
		  return undefined;

	//hovered word
	const searchTerm = getWord(document, position);
	
	//TO_DO: Add filter to only search if it is something that will have a definition
	if(searchTerm != "interface")
		return undefined;

	//TO_DO: Connect to parser by the search term
	//Parser should provide at Location object of the document uri and line position of start and end of defintiion

	let newURI = path.join(path.dirname(textDocument.uri), "seunshare.fc");
	return Location.create(newURI, {
	  start: { line: 2, character: 5 },
	  end: { line: 4, character: 6 }
	});
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