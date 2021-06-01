module.exports = {
    ...require('./index'),
    settings: {
        'import/resolver': {
            '@tophat/eslint-import-resolver-require': {},
            node: {},
        },
    },
    ignorePatterns: ['/.yarn', '/.git', '/.github', '/.vscode', '/artifacts'],
}
