import { type ESLint } from 'eslint'

const config: ESLint.Plugin = {
    configs: {
        recommended: {
            plugins: ['@tophat/eslint-plugin-import'],
            rules: {
                '@tophat/eslint-plugin-import/prefer-workspace-aliases': 'off',
            },
        },
    },
    rules: {
        'prefer-workspace-aliases': require('./rules/prefer-workspace-aliases'),
    },
}

export = config
