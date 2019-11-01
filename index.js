module.exports = {
    extends: ['./base', './react', './jest'].map(require.resolve),
    parserOptions: {
        ecmaVersion: 9,
        sourceType: 'module',
    },
    rules: {},
}
