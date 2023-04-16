import type {
    MonodeployConfiguration,
    RecursivePartial,
} from '@monodeploy/types'

const config: RecursivePartial<MonodeployConfiguration> = {
    conventionalChangelogConfig: '@tophat/conventional-changelog-config',
    maxConcurrentWrites: 1,
    changelogFilename: '<packageDir>/CHANGELOG.md',
    autoCommit: true,
    autoCommitMessage: 'chore: release eslint config [skip ci]',
    plugins: process.env.PREVIEW === '1' ? [] : ['@monodeploy/plugin-github'],
    git: {
        push: true,
        tag: true,
    },
    persistVersions: true,
    changesetIgnorePatterns: ['**/*.test.ts'],
    access: 'public',
}

module.exports = config
