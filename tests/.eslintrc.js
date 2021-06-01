module.exports = {
    ...require('../jest'),
    settings: {
        'import/resolver': {
            '@tophat/eslint-import-resolver-require': {},
            node: {},
        },
    },
}
