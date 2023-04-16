import type { ESLint } from 'eslint'

const plugins: ESLint.ConfigData['plugins'] = []
const rules: ESLint.ConfigData['rules'] = {}
const extensions: ESLint.ConfigData['extends'] = []
const overrides: ESLint.ConfigData['overrides'] = []

const doesModuleExist = (moduleName: string) => {
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
    extensions.push('plugin:react/recommended')
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
        'react/jsx-no-useless-fragment': ['warn', { allowExpressions: true }],
        'react/jsx-no-leaked-render': [
            'warn',
            { validStrategies: ['coerce', 'ternary'] },
        ],
        'react/hook-use-state': 'warn',
        'react/no-array-index-key': 'warn',
        'react/no-unused-prop-types': ['warn', { skipShapeProps: true }],
        'react/jsx-props-no-spreading': ['warn', { explicitSpread: 'ignore' }],
    })
    overrides.push({
        files: ['*.test.*'],
        rules: {
            'react/jsx-props-no-spreading': 'off',
        },
    })
    overrides.push({
        files: ['*.tsx'],
        rules: {
            // In TypeScript, we know with certainty whether we're using booleans or some condition
            // that may shortcircuit and return undefined.
            'react/jsx-no-leaked-render': 'off',
        },
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
    extensions.push('plugin:jsx-a11y/recommended')
}

const tanstackQueryModule = doesModuleExist('@tanstack/eslint-plugin-query')
if (tanstackQueryModule) {
    plugins.push('@tanstack/query')
    extensions.push('plugin:@tanstack/eslint-plugin-query/recommended')
}

const config: ESLint.ConfigData = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins,
    extends: extensions,
    rules,
    overrides,
    settings: {
        react: {
            version: '16.14.0',
        },
    },
}

export = config
