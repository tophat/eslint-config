module.exports = {
    extends: ['./base', './react', './jest', './web'].map(require.resolve),
    parserOptions: {
        ecmaVersion: 9,
        sourceType: 'module',
    },
    rules: {},
}
