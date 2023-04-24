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
	BulkRegistration,
	CompletionItemKind
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

//completion item arrays to use (default plus parsed items)
let combinedTECompletionItems: CompletionItem[];
let combinedIFCompletionItems: CompletionItem[];
let combinedSPTCompletionItems: CompletionItem[];

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

	console.log("Parsing included paths: " + pathsIncluded);
	parseAllIncludedPaths(pathsIncluded, 'add');

	let workspace = await connection.workspace.getWorkspaceFolders();
	if(workspace !== null){

		console.log("Parsing workspace: " + workspace.toString());
		workspace.forEach(element => {
			parseDirectory(URI.parse(element.uri).fsPath, 'add');
		});
	}
	//after parsing all files, update completion item list with parsed entries
	updateCompletionItemLists(); 
	if (hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(DidChangeConfigurationNotification.type, undefined);
	}
});

/*	This function identifies the sends the file to the parser
*	INPUTS: filePath: string with the file path to be parsed 
*		mode: 'add' look through file and add parses to parser
				'remove' remove any previously parsed items from this file from the parser
*	OUTPUTS: None
*/
function processFile(filePath: string, mode: string): void { //process file	
	if(mode === 'add'){
		parser.parseFile(URI.file(filePath).toString());
	}
	else if(mode === 'remove'){
		parser.removeFileParse(URI.file(filePath).toString());
	}
}

function parseDirectory(directoryPath: String, mode: string): void { //parse entire directory
	const dirPrim = directoryPath.toString(); //convert path to string primitive
	console.log("Traversing " + dirPrim);
	if(fs.existsSync(dirPrim)) {
		const files = fs.readdirSync(dirPrim); //read contents of directory

		for (const file of files) { //for each file in directory
			const fullPath = path.join(dirPrim, file); //get its full path
			if (fs.existsSync(fullPath)) {
				const stats = fs.statSync(fullPath); //get properties (is it a file or another directory)

				if (stats.isDirectory()) { //if its a directory
					parseDirectory(fullPath, mode); //recursive parse that folder
				} else if (stats.isFile()) { //otherwise process singular file
					const fileExtension = path.extname(fullPath);
					switch (fileExtension) {
						//process file
						case ".te": 
						case ".if": 
						case ".spt": processFile(fullPath, mode); break;
					}

				}
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
	console.log("Recieved deletion of file " + params.external);
	parser.removeFileParse(params.external);
});

documents.onDidOpen(e => {
	parser.parseFile(e.document.uri);
});

connection.onDidChangeConfiguration(async change => {
	if(change.settings !== null) {
		
		console.log("Settings Change Detected");

		parseAllIncludedPaths(pathsIncluded, 'remove');

		pathsIncluded = change.settings.seLinuxHelper.pathInclusion || defaultSettings;
		
		parseAllIncludedPaths(pathsIncluded, 'add');
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
	//update completion item list
	updateCompletionItemLists();
});

function updateCompletionItemLists(){
	console.log("Updating Completion Items");

	let parsedTEItems: CompletionItem[] = [];
	let parsedIFItems: CompletionItem[] = [];
	let parsedSPTItems: CompletionItem[] = [];
	//for each element in parser map
	for(const [key, value] of parser.definitionTable.entries()){
		let uri:string;
		if (Array.isArray(value.defLocation)){
			uri = value.defLocation[0].uri;
		}
		else{
			uri = value.defLocation.uri;
		}
		// Create a URL object from the URI string
		const url = new URL(uri);
		// Get the file path from the URL object
		const filePath = url.pathname;
		// Get the file name from the file path
		const fileName = path.basename(filePath);

		switch (value.type){
			case "type": //needed in IF and SPT
				//add to if and spt
				const typeItem: CompletionItem = {
					label: key,
        			kind: CompletionItemKind.Variable,
					detail: fileName
				};
				parsedIFItems.push(typeItem);
				parsedSPTItems.push(typeItem);
				break; 
			case "bool": //needed in IF and SPT
				//add to if and spt
				const boolItem: CompletionItem = {
					label: key,
					kind: CompletionItemKind.Variable,
					detail: fileName
				};
				parsedIFItems.push(boolItem);
				parsedSPTItems.push(boolItem);
				break; 
			case "interface":  //needed in IF and TE
				//add to if and te
				const interfaceItem: CompletionItem = {
					label: key,
					kind: CompletionItemKind.Interface,
					detail: fileName,
					insertText: `${key}($1)`,
        			insertTextFormat: 2
				};
				parsedIFItems.push(interfaceItem);
				parsedTEItems.push(interfaceItem);
				break; 
			case "template": //needed in IF and TE
				//add to if and te
				const templateItem: CompletionItem = {
					label: key,
					kind: CompletionItemKind.Struct,
					detail: fileName,
					insertText: `${key}($1)`,
        			insertTextFormat: 2
				};
				parsedIFItems.push(templateItem);
				parsedTEItems.push(templateItem);
				break; 
			case "define": //needed in spt if and te
				//add to if, te, and spt
				const defineItem: CompletionItem = {
					label: key,
					kind: CompletionItemKind.Method,
					detail: fileName,
					insertText: `${key}($1)`,
        			insertTextFormat: 2
				};
				parsedIFItems.push(defineItem);
				parsedTEItems.push(defineItem);
				parsedSPTItems.push(defineItem);
				break; 
		}
	}
	//redefine existing completion item arrays
	// ...[arrayname] is a way to combine arrays (called the spread operator)
	combinedIFCompletionItems = [...parsedIFItems, ...ifCompletionItems];
	combinedSPTCompletionItems = [...parsedSPTItems, ...sptCompletionItems];
	combinedTECompletionItems = [...parsedTEItems, ...teCompletionItems];
}

/*	This function identifies the hovered word and seperates it from any surrounding text
*	INPUTS: document: TextDocument of hovered word 
*		position: Position of hovered word in Text Document
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
		//keep these to default completion item arrays
		//do not use combined arrays
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

function selectString(str1: string, str2: string): string{
	// If both strings are undefined, return null
	const emptyRegex = /^[a-zA-Z_]+$/;

	if(!emptyRegex.test(str1) && !emptyRegex.test(str2)){
		throw  new Error('Both strings are empty');
	}
	// If only one of the strings is defined, return the defined string
	if (!emptyRegex.test(str1)) {
	  return str2;
	}
	if (!emptyRegex.test(str2)) {
	  return str1;
	}
	// If both strings are defined and they are the same, return either
	if (str1 === str2) {
	  return str1;
	}
	// If both strings are defined but they are different, throw an error
	throw new Error(`Both strings are defined and different: str1='${str1}', str2='${str2}'`);
}


//This handler provides the definition location on hover over a word
connection.onDefinition(({ textDocument, position }): Definition | undefined => {
	const document = documents.get(textDocument.uri);
	if (document === undefined) {
		return undefined;
	}
	const { line, character } = position;
	
	const mainTerm = getWord(document, position);
	const altTerm = getWord(document, { line, character:character-1}); //alternate search term for end of word
	let searchTerm:string;
	try{
		searchTerm = selectString(mainTerm, altTerm);
		console.log("Searching for hover on " + searchTerm);
		console.log("Searching for alt hover on " + altTerm);
	
		if (needsDefinition(document.uri, searchTerm)) {
			console.log("Hover for " + searchTerm + " found");
			let locations = parser.getLocations(searchTerm);
			return locations;
		}
	}catch(error){
		if(error instanceof Error){
			console.error(`Error: ${error.message}`);
		}
		else{
			console.error('An unexpected error occurred:', error);
		}
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
			//use combined completion item array here
			case ".te": return combinedTECompletionItems;
			case ".if": return combinedIFCompletionItems;
			case ".spt": return combinedSPTCompletionItems;
			case ".fc": return fcCompletionItems; //fc wont be added to, and so is kept default
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
