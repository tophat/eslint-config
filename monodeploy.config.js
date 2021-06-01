module.exports = {
    conventionalChangelogConfig: '@tophat/conventional-changelog-config',
    maxConcurrentWrites: 1,
    changelogFilename: '<packageDir>/CHANGELOG.md',
    autoCommit: true,
    autoCommitMessage: 'chore: release eslint config [skip ci]',
    plugins: ['@monodeploy/plugin-github'],
}
