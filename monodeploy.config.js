module.exports = {
    conventionalChangelogConfig: '@tophat/conventional-changelog-config',
    maxConcurrentWrites: 1,
    changelogFilename: './CHANGELOG.md',
    autoCommit: true,
    autoCommitMessage: 'chore: release eslint import resolver [skip ci]',
    plugins: process.env.PREVIEW === '1' ? [] : ['@monodeploy/plugin-github'],
    git: {
        push: true,
        tag: true,
    },
    persistVersions: true,
    changesetIgnorePatterns: ['**/*.test.ts'],
    access: 'public',
}
