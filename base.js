module.exports = {
    env: {
        node: true,
        es6: true,
    },
    extends: ['eslint:recommended', 'prettier'],
    plugins: ['import', 'prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                printWidth: 80,
                tabWidth: 4,
                semi: false,
                trailingComma: 'all',
                singleQuote: true,
            },
        ],
        camelcase: ['error', { properties: 'never' }],
        'dot-notation': 'error',
        eqeqeq: 'error',
        'no-duplicate-imports': 'error',
        'no-nested-ternary': 'error',
        'no-useless-computed-key': 'error',
        'no-var': 'error',
        'prefer-const': 'error',
        'prefer-template': 'error',
        /* require-atomic-updates broken per https://github.com/eslint/eslint/issues/11899 */
        'require-atomic-updates': 'off',
        // no autofixer on declaration sort of sort-imports, so we use import/order for declaration sort
        'sort-imports': ['error', { ignoreDeclarationSort: true }],
        'import/default': 'error',
        'import/export': 'error',
        'import/exports-last': 'error',
        'import/named': 'error',
        'import/newline-after-import': 'error',
        'import/no-absolute-path': 'error',
        'import/no-duplicates': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-self-import': 'error',
        'import/no-useless-path-segments': 'error',
        'import/no-unresolved': 'error',
        'import/order': [
            'error',
            {
                'newlines-between': 'always',
                groups: [
                    'unknown',
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                ],
            },
        ],
    },
}
