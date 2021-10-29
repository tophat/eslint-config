const rules = {
    /* Prettier Overrides */
    'prettier/prettier': [
        'error',
        {
            printWidth: 80,
            tabWidth: 4,
            semi: false,
            trailingComma: 'all' /* Reduces git diff. */,
            singleQuote: true,
            arrowParens: 'always', // Reduces character diff when adding Typescript types.
        },
    ],

    /* Variables */
    'no-var': 'error',
    'prefer-const': 'error',
    'no-unused-vars': 'off', // Prefer equivalent rule from @typescript-eslint */
    '@typescript-eslint/no-unused-vars': [
        'error',
        {
            /* By ignoring rest siblings, we support using `...rest` as an alternative to
             * a 3rd party omit function, to omit keys from an object. */
            ignoreRestSiblings: true,
        },
    ],

    /* Strings */
    quotes: ['error', 'single', { avoidEscape: true }],
    'prefer-template': 'error',

    /* Naming Convention */
    camelcase: 'off', // disabled in favour of @typescript-eslint's version
    '@typescript-eslint/naming-convention': 'off', // to enable this, we require a deeper exploration of our naming patterns

    /* Object Properties */
    'dot-notation': 'error',
    'no-useless-computed-key': 'error',
    'no-import-assign': 'warn',

    /* Conditionals */
    eqeqeq: 'error',
    'no-nested-ternary': 'error',

    /* Behaviours */
    /*
     * Rule: Disallow empty function blocks.
     * Reason Disabled: Useful for try..catch{} where we don't care about failure.
     */
    '@typescript-eslint/no-empty-function': 'off',

    /* Broken Rules */
    /*
     * Rule: Disallow assignments that can lead to race conditions.
     * Reason Disabled: The rule is broken and leads to many false positives.
     *   See: https://github.com/eslint/eslint/issues/11899
     */
    'require-atomic-updates': 'off',

    /* Imports */
    'no-duplicate-imports': 'error',
    'sort-imports': [
        'error',
        {
            /* Prefer import/order declaration sort due to  autofixer */
            ignoreDeclarationSort: true,
        },
    ],
    'import/default': 'error',
    'import/export': 'error',
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
            /* Note: Modules are assigned groups based on checks against the module path. */
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

    /* Typescript Types */
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn', // Discourage disabling static analysis.
    '@typescript-eslint/ban-types': 'warn', // Discourage disabling static analysis.
}

const jsIncompatibleRules = {
    /*
     * Rule: Require explicit return and argument types on exported functions/classes.
     * Reason Disabled: Not compatible with JS files, recommended by the rule docs to disable.
     */
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    /*
     * Rule: Disallow require statements in favour of import statements.
     * Reason Disabled: We don't know if JS files are transpiled, so don't bother enforcing TS import syntax.
     */
    '@typescript-eslint/no-var-requires': 'off',
}

module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    env: {
        node: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        // prettier must be the last item in this list to prevent conflicts
        'prettier',
    ],
    plugins: ['import', 'prettier', '@typescript-eslint'],
    rules,
    overrides: [
        {
            files: ['**/*.js'],
            rules: jsIncompatibleRules,
        },
        {
            files: ['**/*.d.ts'],
            rules: {
                /* In type declaration files we often model external libraries,
                 * in which we have no control over the name. */
                '@typescript-eslint/naming-convention': 'off',
            },
        },
    ],
    settings: {
        'import/external-module-folders': ['node_modules', '.yarn'],
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx'],
        },
        'import/resolver': [
            {
                [require.resolve('eslint-import-resolver-typescript')]: {
                    alwaysTryTypes: true,

                },
            },
            { [require.resolve('@tophat/eslint-import-resolver-require')]: {} },
            { [require.resolve('eslint-import-resolver-node')]: {} },
        ],
    },
}
