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
        kind: CompletionItemKind.Keyword
    },
    {
        label: 'allow',
        kind: CompletionItemKind.Keyword
    },
    {
        label: 'class',
        kind: CompletionItemKind.Keyword
    },
    {
        label: 'optional',
        kind: CompletionItemKind.Keyword
    },
    {
        label: 'ifelse',
        kind: CompletionItemKind.Keyword
    },
    {
        label: 'sensitivity',
        kind: CompletionItemKind.Keyword
    },
    {
        label: 'user',
        kind: CompletionItemKind.Keyword
    },
    {
        label: 'dominance',
        kind: CompletionItemKind.Keyword
    },
    {
        label: 'bool',
        kind: CompletionItemKind.Keyword
    },
    {
        label: 'require',
        kind: CompletionItemKind.Keyword
    },
    {
        label: 'role',
        kind: CompletionItemKind.Keyword
    }
]