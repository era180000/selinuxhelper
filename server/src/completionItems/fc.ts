import { CompletionItem, CompletionItemKind } from 'vscode-languageserver/node';

export const fcCompletionItems: CompletionItem[] = [
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
    }
]