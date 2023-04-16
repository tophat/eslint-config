import { type ESLint } from 'eslint'

const config: ESLint.ConfigData = {
    env: {
        jest: true,
    },
    plugins: ['jest'],
    extends: ['plugin:jest/recommended', 'plugin:jest/style'],
    rules: {
        'jest/expect-expect': [
            'error',
            { assertFunctionNames: ['expect', 'testSaga', 'expectSaga'] },
        ],
        'jest/no-done-callback': 'off',
        'jest/no-large-snapshots': 'error',
    },
}

export = config
