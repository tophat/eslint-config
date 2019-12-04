module.exports = {
    env: {
        jest: true,
    },
    plugins: ['jest'],
    extends: 'plugin:jest/recommended',
    rules: {
        'jest/prefer-to-be-null': 'error',
        'jest/prefer-to-be-undefined': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/expect-expect': [
            'error',
            { assertFunctionNames: ['expect', 'testSaga', 'expectSaga'] },
        ],
    },
}
