const plugins = []
const rules = {}
const pluginExtends = []

const doesModuleExist = (moduleName) => {
    try {
        require.resolve(moduleName)
        return true
    } catch {
        return false
    }
}

const reactModule = doesModuleExist('eslint-plugin-react')
if (reactModule) {
    plugins.push('react')
    pluginExtends.push('plugin:react/recommended')
    Object.assign(rules, {
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
    })
}

const reactHooksModule = doesModuleExist('eslint-plugin-react-hooks')
if (reactHooksModule) {
    plugins.push('react-hooks')
    Object.assign(rules, {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
    })
}

const jsxA11yModule = doesModuleExist('eslint-plugin-jsx-a11y')
if (jsxA11yModule) {
    plugins.push('jsx-a11y')
    Object.assign(rules, {
        'jsx-a11y/aria-props': 'error',
        'jsx-a11y/label-has-associated-control': 'error',
        'jsx-a11y/mouse-events-have-key-events': 'error',
        'jsx-a11y/role-has-required-aria-props': 'error',
        'jsx-a11y/role-supports-aria-props': 'error',
    })
}

const tanstackQueryModule = doesModuleExist('@tanstack/eslint-plugin-query')
if (tanstackQueryModule) {
    plugins.push('@tanstack/query')
    Object.assign(rules, {
        '@tanstack/query/exhaustive-deps': 'error',
        '@tanstack/query/prefer-query-object-syntax': 'warn',
    })
}

module.exports = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins,
    extends: pluginExtends,
    rules,
    settings: {
        react: {
            version: '16.14.0',
        },
    },
}
