module.exports = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react', 'react-hooks', 'jsx-a11y'],
    extends: ['plugin:react/recommended'],
    rules: {
        'jsx-a11y/aria-props': 'error',
        'jsx-a11y/label-has-associated-control': 'error',
        'jsx-a11y/mouse-events-have-key-events': 'error',
        'jsx-a11y/role-has-required-aria-props': 'error',
        'jsx-a11y/role-supports-aria-props': 'error',
        'react/default-props-match-prop-types': 'error',
        'react/require-default-props': [
            'error',
            {
                forbidDefaultForRequired: true,
                functions: 'defaultArguments',
            },
        ],
        'react/display-name': 'off',
        'react/no-unsafe': ['error', { checkAliases: true }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
    },
    settings: {
        react: {
            version: '16.14.0',
        },
    },
}
