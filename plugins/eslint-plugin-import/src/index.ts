import { type ESLint } from 'eslint'

const config: ESLint.Plugin = {
    configs: {},
    rules: {
        'prefer-workspace-aliases': require('./rules/prefer-workspace-aliases'),
    },
}

export = config
