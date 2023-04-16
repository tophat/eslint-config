import { type ESLint } from 'eslint'

const config: ESLint.ConfigData = {
    env: {
        browser: true,
    },
    rules: {
        'no-console': 'error',
    },
}

export = config
