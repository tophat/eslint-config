import path from 'path'

import { ESLintUtils } from '@typescript-eslint/utils'

import rule from '.'

const ruleTester = new ESLintUtils.RuleTester({
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
    },
})

describe('Prefer Workspace Aliases', () => {
    beforeAll(() => {
        rule._setAliasCache({
            dependencies: {
                abc: 'link:./src/js/components/a/b/c',
                components: 'link:./src/js/components',
                js: 'link:./src/js',
            },
        })
    })

    ruleTester.run('@thm/shared-rules/prefer-workspace-aliases', rule, {
        valid: [
            {
                code: "import x from 'third-party'",
            },
            {
                code: "import x from '@third-party/package'",
            },
            {
                code: "import x from 'js'",
            },
            {
                code: "import x from 'js/containers'",
            },
            {
                code: "import x from '.'",
                filename: path.resolve(
                    process.cwd(),
                    'src/js/components/a/b/file.js',
                ),
            },
            {
                code: "import x from './c'",
                filename: path.resolve(
                    process.cwd(),
                    'src/js/components/a/b/file.js',
                ),
            },
            {
                // we allow up to one parent directory
                code: "import x from '../c'",
                filename: path.resolve(
                    process.cwd(),
                    'src/js/components/a/b/other/file.js',
                ),
            },
        ],
        invalid: [
            ...[
                ['src/js', 'js'],
                ['src/js/components/x/y', 'components/x/y'],
                ['js/components/x/y', 'components/x/y'],
                ['components/a/b/c', 'abc'],
            ].map(([from, to]) => ({
                code: `import x from '${from}'`,
                output: `import x from '${to}'`,
                errors: [
                    {
                        messageId: 'rewrite-import' as const,
                        data: { importPath: from, rewrittenPath: to },
                    },
                ],
            })),
            {
                code: "import x from '../../c'",
                output: "import x from 'abc'",
                filename: path.resolve(
                    process.cwd(),
                    'src/js/components/a/b/other/more/file.js',
                ),
                errors: [
                    {
                        messageId: 'rewrite-import',
                        data: { importPath: '../../c', rewrittenPath: 'abc' },
                    },
                ],
            },
        ],
    })
})
