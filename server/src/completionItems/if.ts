import { CompletionItem, CompletionItemKind } from 'vscode-languageserver/node';

export const ifCompletionItems: CompletionItem[] = [
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
    }
]