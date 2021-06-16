module.exports = {
    conventionalChangelogConfig: '@tophat/conventional-changelog-config',
    maxConcurrentWrites: 1,
    changelogFilename: './CHANGELOG.md',
    autoCommit: true,
    autoCommitMessage: 'chore: release eslint config [skip ci]',
    plugins: ['@monodeploy/plugin-github'],
    git: {
        push: true,
        tag: true,
    },
    persistVersions: true,
}
