module.exports = {
    extends: ['./base', './react', './jest', './web'].map(require.resolve),
    rules: {},
}
