import { type ESLint } from 'eslint'

const config: ESLint.ConfigData = {
    extends: [
        '@tophat/eslint-config/base',
        '@tophat/eslint-config/react',
        '@tophat/eslint-config/jest',
        '@tophat/eslint-config/web',
    ],
    rules: {},
}

export = config
