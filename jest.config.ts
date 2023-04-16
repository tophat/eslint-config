import type { Config } from 'jest'

const CI = process.env.CI === '1'
const ARTIFACT_DIR = process.env.ARTIFACT_DIR || 'artifacts'

const config: Config = {
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
        '^.+\\.[jt]sx?$': 'ts-jest',
    },
    coverageReporters: CI ? ['lcov'] : ['text-summary', 'lcov'],
    coverageDirectory: `${ARTIFACT_DIR}/test_results/jest/`,
    collectCoverageFrom: [
        '**/src/**/*.{js,ts,tsx}',
        '!**/*.test.{js,ts,tsx}',
        '!**/lib/**',
    ],
    watchPathIgnorePatterns: [
        '<rootDir>/artifacts',
        '<rootDir>/packages/.*/lib',
    ],
    testPathIgnorePatterns: ['/node_modules/', '/.yarn/', '<rootDir>/.*/lib/'],
    haste: {
        throwOnModuleCollision: true,
    },
    modulePathIgnorePatterns: ['<rootDir>/.*/lib'],
}

export default config
