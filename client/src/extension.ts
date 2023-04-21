/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from 'path';
import * as vscode from 'vscode';
import { workspace, ExtensionContext } from 'vscode';
import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: ExtensionContext) {
	// The server is implemented in node
	const serverModule = context.asAbsolutePath(
		path.join('server', 'out', 'server.js')
	);

	// If the extension is launched in debug mode then the debug server options are used
	// Otherwise the run options are used
	const serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: {
			module: serverModule,
			transport: TransportKind.ipc,
		}
	};

	// Options to control the language client
	const clientOptions: LanguageClientOptions = {
		documentSelector: [
			{ scheme: 'file', language: 'te'},
			{ scheme: 'file', language: 'if'},
			{ scheme: 'file', language: 'spt'},
			{ scheme: 'file', language: 'fc'}
	],
		synchronize: {
			// Notify the server about file changes to '.clientrc files contained in the workspace
			//To do, notify changes to included paths or settings
			configurationSection: 'seLinuxHelper',
			fileEvents: [
				workspace.createFileSystemWatcher('**/*.te'),
				workspace.createFileSystemWatcher('**/*.fc'),
				workspace.createFileSystemWatcher('**/*.spt'),
				workspace.createFileSystemWatcher('**/*.if'),
		]		
			
		},
		initializationOptions: {
			pathInclusion: vscode.workspace.getConfiguration('seLinuxHelper').get<Array<String>>('pathInclusion'),
		}
	};

	// Create the language client and start the client.
	client = new LanguageClient(
		'languageServer',
		'Language Server',
		serverOptions,
		clientOptions
	);

	vscode.workspace.onDidDeleteFiles( (e => {
		for(let i = 0; i < e.files.length; i++)
		{
			client.sendRequest('custom/delete', e.files[i]);
		}
	}));

	// Start the client. This will also launch the server
	client.start();
}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
