import {
    ASTUtils,
    AST_NODE_TYPES,
    ESLintUtils,
    type TSESTree,
} from '@typescript-eslint/utils'
import { isIdentifier } from '@typescript-eslint/utils/dist/ast-utils'

const createRule = ESLintUtils.RuleCreator(
    (name) => `@tophat/eslint-plugin-import/${name}`,
)

type MessageIds = 'rewrite-import' | 'rewrite-usage'

type Options = [
    {
        skipDefaultReactTypeImport?: boolean
        methods?: string[]
    },
]

const isMemberExpression = ASTUtils.isNodeOfType(
    AST_NODE_TYPES.MemberExpression,
)

const isImportDefaultSpecifier = ASTUtils.isNodeOfType(
    AST_NODE_TYPES.ImportDefaultSpecifier,
)

const isImportSpecifier = ASTUtils.isNodeOfType(AST_NODE_TYPES.ImportSpecifier)

const rule = createRule<Options, MessageIds>({
    name: 'prefer-non-default-react-imports',
    meta: {
        docs: {
            description:
                'Do not use the default React import, instead be explicit about imports.',
            recommended: 'error',
        },
        messages: {
            'rewrite-import': 'Your React import should contain: {{methods}}.',
            'rewrite-usage': 'Rewrite React.{{method}} as {{method}}.',
        },
        type: 'suggestion',
        schema: [
            {
                type: 'object',
                properties: {
                    methods: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                        additionalProperties: false,
                    },
                },
            },
        ],
        fixable: 'code',
    },
    defaultOptions: [
        {
            skipDefaultReactTypeImport: false,
            methods: [
                'useCallback',
                'useContext',
                'useDebugValue',
                'useDeferredValue',
                'useEffect',
                'useId',
                'useImperativeHandle',
                'useInsertionEffect',
                'useLayoutEffect',
                'useMemo',
                'useReducer',
                'useRef',
                'useState',
                'useSyncExternalStore',
                'useTransition',
            ],
        },
    ],
    create(context) {
        const skipDefaultReactTypeImport =
            context.options[0]?.skipDefaultReactTypeImport ??
            rule.defaultOptions[0].skipDefaultReactTypeImport ??
            false
        const methodSet = new Set(
            context.options[0]?.methods ?? rule.defaultOptions[0].methods ?? [],
        )

        let reactImportDeclaration: TSESTree.ImportDeclaration | undefined
        const methodsUsed: Set<string> = new Set()

        return {
            ImportDeclaration(node) {
                if (
                    node.source.value !== 'react' ||
                    (skipDefaultReactTypeImport && node.importKind === 'type')
                ) {
                    return
                }
                reactImportDeclaration ??= node
            },
            CallExpression(node) {
                // We're only interested in member expressions of the form React.<method>
                if (
                    !isMemberExpression(node.callee) ||
                    !isIdentifier(node.callee.object) ||
                    !isIdentifier(node.callee.property) ||
                    node.callee.object.name !== 'React' ||
                    !methodSet.has(node.callee.property.name)
                ) {
                    return
                }

                const method = node.callee.property.name
                methodsUsed.add(method)

                context.report({
                    node: node.callee,
                    messageId: 'rewrite-usage',
                    data: {
                        method,
                    },
                    fix(fixer) {
                        return fixer.replaceText(node.callee, method)
                    },
                })
            },
            'Program:exit'() {
                const reactImport = reactImportDeclaration

                if (!reactImport || !methodsUsed.size) return

                const allMethods = new Set<string>(methodsUsed)
                for (const specifier of reactImport.specifiers) {
                    if (isImportSpecifier(specifier)) {
                        if (specifier.local.name !== specifier.imported.name) {
                            // We don't support aliases. Too much unnecessary complexity.
                            return
                        }
                        if (specifier.importKind === 'type') {
                            allMethods.add(`type ${specifier.imported.name}`)
                        } else {
                            allMethods.add(specifier.imported.name)
                        }
                    }
                }

                const parts: string[] = []
                if (isImportDefaultSpecifier(reactImport.specifiers[0])) {
                    if (reactImport.importKind === 'type') {
                        allMethods.add('type default as React')
                    } else {
                        parts.push('React')
                    }
                }
                if (allMethods.size) {
                    parts.push(
                        `{ ${Array.from(allMethods).sort().join(', ')} }`,
                    )
                }

                if (!parts.length) return

                const goodImport = `import ${parts.join(', ')} from 'react'`

                context.report({
                    node: reactImport,
                    messageId: 'rewrite-import',
                    data: {
                        methods: Array.from(methodsUsed).sort().join(', '),
                    },
                    fix(fixer) {
                        return fixer.replaceText(reactImport, goodImport)
                    },
                })
            },
        }
    },
})

export = rule
