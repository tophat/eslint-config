import { type ESLint } from 'eslint'

const config: ESLint.Plugin = {
    configs: {
        recommended: {
            plugins: ['@tophat/eslint-plugin-import'],
            rules: {
                '@tophat/import/prefer-workspace-aliases': 'off',
                '@tophat/import/prefer-non-default-react-imports': 'off',
            },
        },
    },
    rules: {
        'prefer-workspace-aliases': require('./rules/prefer-workspace-aliases'),
        'prefer-non-default-react-imports': require('./rules/prefer-non-default-react-imports'),
    },
}

export = config
