const CI = process.env.CI === '1'
const ARTIFACT_DIR = process.env.ARTIFACT_DIR || 'artifacts'

module.exports = {
    ...(CI && {
        reporters: [
            'default',
            [
                'jest-junit',
                {
                    suiteName: 'Jest Tests',
                    outputDirectory: `${ARTIFACT_DIR}/test_results/jest/`,
                    outputName: 'jest.junit.xml',
                },
            ],
        ],
        collectCoverage: true,
    }),
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    coverageReporters: CI ? ['lcov'] : ['text-summary', 'lcov'],
    coverageDirectory: `${ARTIFACT_DIR}/test_results/jest/`,
    collectCoverageFrom: [
        'packages/**/src/**/*.js',
        'base.js',
        'jest.js',
        'react.js',
        'web.js',
        'index.js',
        '!.yarn/**',
        '!tests/**/*.js',
        '!packages/**/src/**/*.test.js',
        '!packages/**/src/**/*.mock.js',
        '!packages/**/src/**/__mocks__',
    ],
    watchPathIgnorePatterns: [
        '<rootDir>/artifacts',
        '<rootDir>/packages/.*/lib',
    ],
    testPathIgnorePatterns: ['<rootDir>/.*/lib/'],
    haste: {
        throwOnModuleCollision: true,
    },
    modulePathIgnorePatterns: ['<rootDir>/.*/lib'],
    resolver: '<rootDir>/jest-resolver.js',
}
