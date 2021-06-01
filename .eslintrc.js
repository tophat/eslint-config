module.exports = {
    ...require('./index'),
    settings: {
        'import/resolver': {
            node: {},
            '@tophat/eslint-import-resolver-require': {},
        },
    },
}
