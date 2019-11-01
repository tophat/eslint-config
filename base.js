module.exports = {
    env: {
        node: true,
        es6: true,
    },
    extends: ['eslint:recommended', 'prettier'],
    plugins: ['prettier'],
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
        'sort-imports': 'error',
    },
}
