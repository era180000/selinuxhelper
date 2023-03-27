/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import {
	createConnection,
	TextDocuments,
	Diagnostic,
	DiagnosticSeverity,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	CompletionItemKind,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	InitializeResult,
	
} from 'vscode-languageserver/node';


import {
	TextDocument,
} from 'vscode-languageserver-textdocument';

import * as path from 'path';
import * as fs from 'fs';
import * as glob from 'glob';

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
			hoverProvider: true
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

	// Revalidate all open text documents
	documents.all().forEach(validateTextDocument);
});

function getDocumentSettings(resource: string): Thenable<ExampleSettings> {
	if (!hasConfigurationCapability) {
		return Promise.resolve(globalSettings);
	}
	let result = documentSettings.get(resource);
	if (!result) {
		result = connection.workspace.getConfiguration({
			scopeUri: resource,
			section: 'languageServerExample'
		});
		documentSettings.set(resource, result);
	}
	return result;
}

// Only keep settings for open documents
documents.onDidClose(e => {
	documentSettings.delete(e.document.uri);
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
	validateTextDocument(change.document);
});

async function validateTextDocument(textDocument: TextDocument): Promise<void> {
    
	// In this simple example we get the settings for every validate run.
	const settings = await getDocumentSettings(textDocument.uri);
	
	// The validator creates diagnostics for all uppercase words length 2 and more
	const text = textDocument.getText();
	const pattern = /\b[A-Z]{2,}\b/g;
	let m: RegExpExecArray | null;

	let problems = 0;
	const diagnostics: Diagnostic[] = [];
	while ((m = pattern.exec(text)) && problems < settings.maxNumberOfProblems) {
		problems++;
		const diagnostic: Diagnostic = {
			severity: DiagnosticSeverity.Warning,
			range: {
				start: textDocument.positionAt(m.index),
				end: textDocument.positionAt(m.index + m[0].length)
			},
			message: `${m[0]} is all uppercase.`,
			source: 'ex'
		};
		if (hasDiagnosticRelatedInformationCapability) {
			diagnostic.relatedInformation = [
				{
					location: {
						uri: textDocument.uri,
						range: Object.assign({}, diagnostic.range)
					},
					message: 'Spelling matters'
				},
				{
					location: {
						uri: textDocument.uri,
						range: Object.assign({}, diagnostic.range)
					},
					message: 'Particularly for names'
				}
			];
		}
		diagnostics.push(diagnostic);
	}

	// Send the computed diagnostics to VSCode.
	connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
    
}

connection.onDidChangeWatchedFiles(_change => {
	// Monitored files have change in VSCode
	connection.console.log('We received an file change event');
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
		
        if (fileExtension === ".te" ){
            return[ //.te completion items
            {
					label: 'alias',
					kind: CompletionItemKind.Text			
			},
			{
					label: 'allow',
					kind: CompletionItemKind.Text			
			},
			{
					label: 'and',
					kind: CompletionItemKind.Text			
			},
			{
					label: 'attribute',
					kind: CompletionItemKind.Text			
			},
			{
					label: 'attribute_role',
					kind: CompletionItemKind.Text			
			},
			{
					label: 'auditallow',
					kind: CompletionItemKind.Text			
			},
			{
					label: 'auditdeny',
					kind: CompletionItemKind.Text			
			},
			{
					label: 'bool',
					kind: CompletionItemKind.Text			
			},
			{
					label: 'category',
					kind: CompletionItemKind.Text			
			},
			{
					label: 'cfalse',
					kind: CompletionItemKind.Text			
			},
			{
					label: 'class',
					kind: CompletionItemKind.Text			
			},
			{
					label: 'clone',
					kind: CompletionItemKind.Text			
			},
			{
					label: 'common',
					kind: CompletionItemKind.Text			
			},
			{
					label: 'constrain',
					kind: CompletionItemKind.Text			
			},
			{
					label: 'ctrue',
					kind: CompletionItemKind.Text
			},
			{
					label: 'dom',
					kind: CompletionItemKind.Text
			},
			{
					label: 'domby',
					kind: CompletionItemKind.Text
			},
			{
					label: 'dominance',
					kind: CompletionItemKind.Text
			},
			{
					label: 'dontaudit',
					kind: CompletionItemKind.Text
			},
			{
					label: 'else',
					kind: CompletionItemKind.Text
			},
			{
					label: 'equals',
					kind: CompletionItemKind.Text
			},
			{
					label: 'false',
					kind: CompletionItemKind.Text
			},
			{
					label: 'filename',
					kind: CompletionItemKind.Text
			},
			{
					label: 'filesystem',
					kind: CompletionItemKind.Text
			},
			{
					label: 'fscon',
					kind: CompletionItemKind.Text
			},
			{
					label: 'fs_use_task',
					kind: CompletionItemKind.Text
			},
			{
					label: 'fs_use_trans',
					kind: CompletionItemKind.Text
			},
			{
					label: 'fs_use_xattr',
					kind: CompletionItemKind.Text
			},
			{
					label: 'genfscon',
					kind: CompletionItemKind.Text
			},
			{
					label: 'h1',
					kind: CompletionItemKind.Text
			},
			{
					label: 'h2',
					kind: CompletionItemKind.Text
			},
			{
					label: 'identifier',
					kind: CompletionItemKind.Text
			},
			{
					label: 'if',
					kind: CompletionItemKind.Text
			},
			{
					label: 'incomp',
					kind: CompletionItemKind.Text
			},
			{
					label: 'inherits',
					kind: CompletionItemKind.Text
			},
			{
					label: 'iomemcon',
					kind: CompletionItemKind.Text
			},
			{
					label: 'ioportcon',
					kind: CompletionItemKind.Text
			},
			{
					label: 'ipv4_addr',
					kind: CompletionItemKind.Text
			},
			{
					label: 'ipv6_addr',
					kind: CompletionItemKind.Text
			},
			{
					label: 'l1',
					kind: CompletionItemKind.Text
			},
			{
					label: 'l2',
					kind: CompletionItemKind.Text
			},
			{
					label: 'level',
					kind: CompletionItemKind.Text
			},
			{
					label: 'mlsconstrain',
					kind: CompletionItemKind.Text
			},
			{
					label: 'mlsvalidatetrans',
					kind: CompletionItemKind.Text
			},
			{
					label: 'module',
					kind: CompletionItemKind.Text
			},
			{
					label: 'netifcon',
					kind: CompletionItemKind.Text
			},
			{
					label: 'neverallow',
					kind: CompletionItemKind.Text
			},
			{
					label: 'nodecon',
					kind: CompletionItemKind.Text
			},
			{
					label: 'not',
					kind: CompletionItemKind.Text
			},
			{
					label: 'notequal',
					kind: CompletionItemKind.Text
			},
			{
					label: 'number',
					kind: CompletionItemKind.Text
			},
			{
					label: 'object_r',
					kind: CompletionItemKind.Text
			},
			{
					label: 'optional',
					kind: CompletionItemKind.Text
			},
			{
					label: 'or',
					kind: CompletionItemKind.Text
			},
			{
					label: 'path',
					kind: CompletionItemKind.Text
			},
			{
					label: 'pcidevicecon',
					kind: CompletionItemKind.Text
			},
			{
					label: 'permissive',
					kind: CompletionItemKind.Text
			},
			{
					label: 'pirqcon',
					kind: CompletionItemKind.Text
			},
			{
					label: 'policycap',
					kind: CompletionItemKind.Text
			},
			{
					label: 'portcon',
					kind: CompletionItemKind.Text
			},
			{
					label: 'r1',
					kind: CompletionItemKind.Text
			},
			{
					label: 'r2',
					kind: CompletionItemKind.Text
			},
			{
					label: 'r3',
					kind: CompletionItemKind.Text
			},
			{
					label: 'range',
					kind: CompletionItemKind.Text
			},
			{
					label: 'range_transition',
					kind: CompletionItemKind.Text
			},
			{
					label: 'require',
					kind: CompletionItemKind.Text
			},
			{
					label: 'role',
					kind: CompletionItemKind.Text
			},
			{
					label: 'roleattribute',
					kind: CompletionItemKind.Text
			},
			{
					label: 'roles',
					kind: CompletionItemKind.Text
			},
			{
					label: 'role_transition',
					kind: CompletionItemKind.Text
			},
			{
					label: 'sameuser',
					kind: CompletionItemKind.Text
			},
			{
					label: 'sensitivity',
					kind: CompletionItemKind.Text
			},
			{
					label: 'sid',
					kind: CompletionItemKind.Text
			},
			{
					label: 'source',
					kind: CompletionItemKind.Text
			},
			{
					label: 't1',
					kind: CompletionItemKind.Text
			},
			{
					label: 't2',
					kind: CompletionItemKind.Text
			},
			{
					label: 't3',
					kind: CompletionItemKind.Text
			},
			{
					label: 'target',
					kind: CompletionItemKind.Text
			},
			{
					label: 'true',
					kind: CompletionItemKind.Text
			},
			{
					label: 'type',
					kind: CompletionItemKind.Text
			},
			{
					label: 'typealias',
					kind: CompletionItemKind.Text
			},
			{
					label: 'typeattribute',
					kind: CompletionItemKind.Text
			},
			{
					label: 'typebounds',
					kind: CompletionItemKind.Text
			},
			{
					label: 'type_change',
					kind: CompletionItemKind.Text
			},
			{
					label: 'type_member',
					kind: CompletionItemKind.Text
			},
			{
					label: 'types',
					kind: CompletionItemKind.Text
			},
			{
					label: 'type_transition',
					kind: CompletionItemKind.Text
			},
			{
					label: 'u1',
					kind: CompletionItemKind.Text
			},
			{
					label: 'u2',
					kind: CompletionItemKind.Text
			},
			{
					label: 'u3',
					kind: CompletionItemKind.Text
			},
			{
					label: 'user',
					kind: CompletionItemKind.Text
			},
			{
					label: 'validatetrans',
					kind: CompletionItemKind.Text
			},
			{
					label: 'version_identifier',
					kind: CompletionItemKind.Text
			},
			{
					label: 'xor',
					kind: CompletionItemKind.Text
			},
			{
					label: 'default_user',
					kind: CompletionItemKind.Text
			},
			{
					label: 'default_role',
					kind: CompletionItemKind.Text
			},
			{
					label: 'default_type',
					kind: CompletionItemKind.Text
			},
			{
					label: 'default_range',
					kind: CompletionItemKind.Text
			},
			{
					label: 'low',
					kind: CompletionItemKind.Text
			},
			{
					label: 'high',
					kind: CompletionItemKind.Text
			},
			{
					label: 'low_high',
					kind: CompletionItemKind.Text
			},
			{
				label: 'tunable_policy',
				kind: CompletionItemKind.Function,
				insertText: 'tunable_policy(`$1\', `$2\')',
				insertTextFormat: 2,
				data: 1
			},
			{
				label: 'optional_policy',
				kind: CompletionItemKind.Function,
				insertText: 'optional_policy(`$0\')',
				insertTextFormat: 2,
				data: 2
			},
			{
				label: 'ifdef',
				kind: CompletionItemKind.Function,
				insertText: 'ifdef(`$0\', `$1\')',
				insertTextFormat: 2,
				data: 3
			},
            ];
        } else if (fileExtension === ".if"){
            return[ //.if completion items
			{
					label: 'type',
					kind: CompletionItemKind.Text
			},
			{
					label: 'types',
					kind: CompletionItemKind.Text
			},
			{
					label: 'allow',
					kind: CompletionItemKind.Text
			},
			{
					label: 'role',
					kind: CompletionItemKind.Text
			},
			{
					label: 'attribute',
					kind: CompletionItemKind.Text
			},
			{
					label: 'bool',
					kind: CompletionItemKind.Text
			},
			{
					label: 'dontaudit',
					kind: CompletionItemKind.Text
			},
			{
					label: 'class',
					kind: CompletionItemKind.Text
			},
			{
					label: 'roleattribute',
					kind: CompletionItemKind.Text
			},
			{
					label: 'attribute_role',
					kind: CompletionItemKind.Text
			},
			{
				label: 'interface',
				kind: CompletionItemKind.Function,
				insertText: 'interface(`$0\')',
				insertTextFormat: 2,
				data: 4
			},
			{
				label: 'gen_require',
				kind: CompletionItemKind.Function,
				insertText: 'gen_require(`$0\')',
				insertTextFormat: 2,
				data: 5
			},
			{
				label: 'ifdef',
				kind: CompletionItemKind.Function,
				insertText: 'ifdef(`$1\', `$2\')',
				insertTextFormat: 2,
				data: 6
			},
			{
				label: 'template',
				kind: CompletionItemKind.Function,
				insertText: 'template(`$1\', `$2\')',
				insertTextFormat: 2,
				data: 7
			},
			{
				label: 'optional_policy',
				kind: CompletionItemKind.Function,
				insertText: 'optional_policy(`$1\')',
				insertTextFormat: 2,
				data: 8
			},
            ];
		} else if (fileExtension === ".fc"){
            return[//.fc completions
				{
					label: 'gen_context',
					kind: CompletionItemKind.Function,
					insertText: 'gen_context($1,$2)',
					insertTextFormat: 2,
					data: 9
				},
                {
					label: 'system_u',
					kind: CompletionItemKind.Text
				},
				{
					label: 'object_r',
					kind: CompletionItemKind.Text
				},
            ];
        } else if (fileExtension === ".spt"){
            return[//.spt completions
			{
				label: 'define',
				kind: CompletionItemKind.Function,
				insertText: 'define(`$1\',`$2\')',
				insertTextFormat: 2,
				data: 9
		},
		{
				label: 'module',
				kind: CompletionItemKind.Text
		},
		{
				label: 'allow',
				kind: CompletionItemKind.Text
		},
		{
				label: 'class',
				kind: CompletionItemKind.Text
		},
		{
				label: 'optional',
				kind: CompletionItemKind.Text
		},
		{
				label: 'ifelse',
				kind: CompletionItemKind.Text
		},
		{
				label: 'sensitivity',
				kind: CompletionItemKind.Text
		},
		{
				label: 'user',
				kind: CompletionItemKind.Text
		},
		{
				label: 'dominance',
				kind: CompletionItemKind.Text
		},
		{
				label: 'bool',
				kind: CompletionItemKind.Text
		},
		{
				label: 'require',
				kind: CompletionItemKind.Text
		},
		{
				label: 'role',
				kind: CompletionItemKind.Text
		}
        ];
        }
        //not my circus not my monkeys
		return[];
	}
);

// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve(
	(item: CompletionItem): CompletionItem => {
		switch (item.data){
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