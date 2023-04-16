import { type ESLint } from 'eslint'

const config: ESLint.Plugin = {
    configs: {
        recommended: {
            plugins: ['@tophat/eslint-plugin-import'],
            rules: {
                '@tophat/prefer-workspace-aliases': 'off',
            },
        },
    },
    rules: {
        '@tophat/prefer-workspace-aliases': require('./rules/prefer-workspace-aliases'),
    },
}

export = config
