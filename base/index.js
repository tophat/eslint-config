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
            // The following allows us to maintain args for type purposes without needing to use them,
            //  for example, a reducer in which the action is typed but we don't use the action in the
            //  reducer
            argsIgnorePattern: '^_',
            // The alternative to this is to use empty array syntax, such as const [, , thing] = someArr
            //  this syntax lets you at least name the unused parameters which reads a bit nicer, i.e.
            //  const [_first, _second, third] = someArr
            destructuredArrayIgnorePattern: '^_',
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
                'object',
                'type',
            ],
            alphabetize: { order: 'asc' },
            pathGroups: [
                {
                    pattern: '@tophat/**',
                    group: 'external',
                    position: 'after',
                },
            ],
            pathGroupsExcludedImportTypes: ['builtin'],
            warnOnUnassignedImports: true,
        },
    ],

    /* Typescript Types */
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn', // Discourage disabling static analysis.
    '@typescript-eslint/ban-types': 'warn', // Discourage disabling static analysis.
    '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
    ],
    '@typescript-eslint/no-confusing-void-expression': [
        'warn',
        { ignoreVoidOperator: true },
    ],
    '@typescript-eslint/no-duplicate-enum-values': 'warn',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
    '@typescript-eslint/prefer-ts-expect-error': 'error',

    // no-use-before-define can cause errors with typescript concepts, like types or enums
    'no-use-before-define': 'off',
    // functions can be called before they are defined because function declarations are hoisted
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
}

const jsIncompatibleRules = {
    /*
     * Rule: Disallow require statements in favour of import statements.
     * Reason Disabled: We don't know if JS files are transpiled, so don't bother enforcing TS import syntax.
     */
    '@typescript-eslint/no-var-requires': 'off',
}

module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
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
            files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
            rules: jsIncompatibleRules,
        },
        {
            files: ['**/*.d.ts', '**/*.d.mts', '**/*.d.cts'],
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
            '@typescript-eslint/parser': [
                '.ts',
                '.tsx',
                '.mts',
                '.cts',
                '.js',
                '.mjs',
                '.cjs',
                '.jsx',
            ],
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
