/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import { FileParser } from './parser';
import {
	createConnection,
	TextDocuments,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	Definition,
	FileChangeType,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	InitializeResult,
	Position,
	BulkRegistration
} from 'vscode-languageserver/node';
import { URI } from "vscode-uri";
import { teCompletionItems } from './completionItems/te';
import { fcCompletionItems } from './completionItems/fc';
import { ifCompletionItems } from './completionItems/if';
import { sptCompletionItems } from './completionItems/spt';

import {
	TextDocument,
} from 'vscode-languageserver-textdocument';

import * as path from 'path';
import * as fs from 'fs';

const parser = new FileParser();

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

//global settings
let pathsIncluded: Array<String>;

const defaultSettings: Array<String> = ["/usr/share/selinux/devel/include/"];

// Create a simple text document manager.
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;

connection.onInitialize(async (params: InitializeParams) => {
	const capabilities = params.capabilities;


	// Does the client support the `workspace/configuration` request?
	// If not, we fall back using global settings.
	hasConfigurationCapability = !!(
		capabilities.workspace && !!capabilities.workspace.configuration
	);
	hasWorkspaceFolderCapability = !!(
		capabilities.workspace && !!capabilities.workspace.workspaceFolders
	);

	pathsIncluded = params.initializationOptions.pathInclusion;

	const result: InitializeResult = {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental,
			// Tell the client that this server supports code completion.
			completionProvider: {
				resolveProvider: true,
			},
			definitionProvider: true,
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

connection.onInitialized(async () => {

	parseAllIncludedPaths(pathsIncluded, 'a');
	let workspace = await connection.workspace.getWorkspaceFolders();
	if(workspace !== null){
		workspace.forEach(element => {
			parseDirectory(URI.parse(element.uri).fsPath, 'a');
		});
	}

	if (hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(DidChangeConfigurationNotification.type, undefined);
	}
});

function processFile(filePath: string, mode: string): void { //process file	
	if(mode === 'a'){
		parser.parseFile(URI.file(filePath).toString());
	}
	else if(mode === 'r'){
		parser.removeFileParse(URI.file(filePath).toString());
	}
}

function parseDirectory(directoryPath: String, mode: string): void { //parse entire directory
	const dirPrim = directoryPath.toString(); //convert path to string primitive
	if(fs.existsSync(dirPrim)) {
		const files = fs.readdirSync(dirPrim); //read contents of directory

		for (const file of files) { //for each file in directory
			const fullPath = path.join(dirPrim, file); //get its full path
			const stats = fs.statSync(fullPath); //get properties (is it a file or another directory)

			if (stats.isDirectory()) { //if its a directory
				parseDirectory(fullPath, mode); //recursive parse that folder
			} else if (stats.isFile()) { //otherwise process singular file
				processFile(fullPath, mode);
			}
		}
	}
}

// 'a' is add to list
// 'r' is remove from list
function parseAllIncludedPaths(path:Array<String>, mode: string){ //for each path in the pathsIncluded initial param
	path.forEach(element => {
		parseDirectory(element, mode); //parse that entire directory
	});
	
}

connection.onRequest('custom/delete', async (params) => {
	// handle custom request
	parser.removeFileParse(params.external);
});

documents.onDidOpen(e => {
	parser.parseFile(e.document.uri);
});

connection.onDidChangeConfiguration(async change => {
	if(change.settings !== null) {
		
		parseAllIncludedPaths(pathsIncluded, 'r');

		pathsIncluded = change.settings.seLinuxHelper.pathInclusion || defaultSettings;
		
		parseAllIncludedPaths(pathsIncluded, 'a');
	}
});

connection.onDidChangeWatchedFiles(async _change => {
	// Monitored files have change in VSCode
	for (let i = 0; i < _change.changes.length; i++) {
		const change = _change.changes[i];
		switch (change.type) {
			case FileChangeType.Created:
				parser.parseFile(change.uri);
				break;
			case FileChangeType.Deleted:
				parser.removeFileParse(change.uri);
				break;
			case FileChangeType.Changed:
				parser.parseFile(change.uri);
				break;
			default:
				// do nothing
				break;
		}
	}
});


/*	This function identifies the hovered word and seperates it from any surrounding text
*	INPUTS: document: TextDocument of hovered word
			position: Position of hovered word in Text Document
*	OUTPUTS: String representing the hovered word seperated from any adjoining punctuation 
*				or separator markings 
*/
function getWord(document: TextDocument, position: Position) {
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
	if (line.charAt(0) === '#') {
		return "";
	}

	const text = line.replace(/[^\w\\$\\-]/g, " ");
	const index = document.offsetAt(position) - document.offsetAt(start);
	const first = text.lastIndexOf(' ', index);
	const last = text.indexOf(' ', index);
	const word = text.substring(first !== -1 ? first + 1 : 0, last !== -1 ? last : text.length - 1);
	return word;
}



/*	This function identifies whether a term is not a keyword and needs a definition
*	INPUTS: String search term 
*			Uri of file location containing search term
*	OUTPUTS: Boolean Value 
*				True: likely to have a definition
*				False: keyword, whitespace, or other invalid search teram
*/
function needsDefinition(uri: string, searchTerm: string) {

	if (searchTerm === ' ' || searchTerm === '') {
		return false;
	}

	//get relevant list of keywords for the filetype
	const fileExtension = path.extname(uri);

	let searchList = null;
	switch (fileExtension) {
		case ".te": searchList = teCompletionItems; break;
		case ".if": searchList = ifCompletionItems; break;
		case ".spt": searchList = sptCompletionItems; break;
		case ".fc": searchList = fcCompletionItems; break;
	}

	if (searchList !== null) {
		//identify if search term is a known keyword
		for (const index in searchList) {
			if (searchList[index].label === searchTerm) {
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

//This handler provides the definition location on hover over a word
connection.onDefinition(({ textDocument, position }): Definition | undefined => {
	const document = documents.get(textDocument.uri);
	if (document === undefined) {
		return undefined;
	}
	const searchTerm = getWord(document, position);

	if (needsDefinition(document.uri, searchTerm)) {
		let locations = parser.getLocations(searchTerm);
		return locations;
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
		switch (fileExtension) {
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
