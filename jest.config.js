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
        'base/index.js',
        'jest/index.js',
        'react/index.js',
        'web/index.js',
        'index.js',
        '!.yarn/**',
        '!tests/**/*.js',
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
}
