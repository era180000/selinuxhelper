import { CompletionItem, CompletionItemKind } from 'vscode-languageserver/node';

export const fcCompletionItems: CompletionItem[] = [
    {
        label: 'system_u',
        kind: CompletionItemKind.Text
    },
    {
        label: 'object_r',
        kind: CompletionItemKind.Text
    }
];