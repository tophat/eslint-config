import { type ESLint } from 'eslint'

const config: ESLint.Plugin = {
    configs: {},
    rules: {
        '@tophat/prefer-workspace-aliases': require('./rules/prefer-workspace-aliases'),
    },
}

export = config
