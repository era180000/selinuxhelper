import { CompletionItem, CompletionItemKind } from 'vscode-languageserver/node';

export const ifCompletionItems: CompletionItem[] = [
    {
        label: 'type',
        kind: CompletionItemKind.Keyword
    },
    {
        label: 'types',
        kind: CompletionItemKind.Keyword
    },
    {
        label: 'allow',
        kind: CompletionItemKind.Keyword
    },
    {
        label: 'role',
        kind: CompletionItemKind.Keyword
    },
    {
        label: 'attribute',
        kind: CompletionItemKind.Keyword
    },
    {
        label: 'bool',
        kind: CompletionItemKind.Keyword
    },
    {
        label: 'dontaudit',
        kind: CompletionItemKind.Keyword
    },
    {
        label: 'class',
        kind: CompletionItemKind.Keyword
    },
    {
        label: 'roleattribute',
        kind: CompletionItemKind.Keyword
    },
    {
        label: 'attribute_role',
        kind: CompletionItemKind.Keyword
    },
    {
        label: 'typeattribute',
        kind: CompletionItemKind.Keyword
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
        data: 8
    },
    {
        label: 'optional_policy',
        kind: CompletionItemKind.Function,
        insertText: 'optional_policy(`$1\')',
        insertTextFormat: 2,
        data: 9
    }
]