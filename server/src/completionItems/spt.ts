import { CompletionItem, CompletionItemKind } from 'vscode-languageserver/node';

export const sptCompletionItems: CompletionItem[] = [
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
]