import { TSESLint } from '@typescript-eslint/utils'

import type { ESLint } from 'eslint'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const allPrettierRules = Object.keys(require('eslint-config-prettier').rules)

const configs = [
    {
        file: '.',
        codeExample: `export default function (a, b) {
    return a + b
}
`,
    },
    {
        file: 'base',
        codeExample: `function foo(a, b) {
    return a + b
}

foo(1, 2)
`,
    },
    {
        file: 'react',
        codeExample: `
var React = require('react')
var PropTypes = require('prop-types')

function MyComponent(props) {
    var toggleState = React.useState(true)
    React.useEffect(function (){
        if (toggleState[0]) {
            toggleState[1](false)
        }
    }, [props, toggleState])
    if (toggleState[0]) {
        return
    }
    return <div>Hi, {props.name}!</div>
}

MyComponent.propTypes = {
    name: PropTypes.string.isRequired
}
        `,
        badCodeExample: `
var React = require('react')
var PropTypes = require('prop-types')

function MyComponent(props) {
    var toggleState = React.useState(true)
    if (!toggleState[0]) {
        return
    }
    React.useEffect(function (){
        if (toggleState[0]) {
            toggleState[1](false)
        }
    }, [props])
    return <div>Hi, {props.name}!</div>
}

MyComponent.propTypes = {
    name: PropTypes.string.isRequired
}
        `,
        badCodeMessageCount: 2,
    },
    {
        file: 'jest',
        codeExample: `
describe('Some suite', function() {
    it('runs some test', function() {
        expect(1 + 1).toBe(2)
    })
})
        `,
    },
    {
        file: 'web',
        codeExample: `
var React = require('react')
var ReactDOM = require('react-dom')
var element = document.getElementById('dawg')
ReactDOM.render(React.createElement('div'), element)
        `,
    },
]

describe.each(configs)(
    '$file config',
    ({ codeExample, badCodeMessageCount, badCodeExample, file }) => {
        let config: ESLint.ConfigData | undefined
        const moduleName = `@tophat/eslint-config/${file}`
        beforeAll(() => {
            config = require(moduleName)
            if (config) {
                config.parserOptions = {
                    ...config.parserOptions,
                    tsconfigRootDir: '.',
                    project: [require.resolve('../tsconfig.json')],
                }
            }
        })
        afterAll(() => {
            config = undefined
        })

        it("doesn't include any rules superseded by prettier", () => {
            const prettierConflictWhitelist = ['quotes']

            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const baseRules = Object.keys(config!.rules!).filter(
                (rule) => !prettierConflictWhitelist.includes(rule),
            )

            baseRules.forEach((baseRule) => {
                expect(allPrettierRules).not.toContain(baseRule)
            })
        })

        it('has no errors', async () => {
            // Run eslint on a minimal code example to make sure all rules
            // are named and configured correctly
            const cli = new TSESLint.ESLint({
                useEslintrc: false,
                overrideConfigFile: require.resolve(moduleName),
            })
            const results = await cli.lintText(codeExample, {
                filePath: 'config/tests/example.js',
            })
            expect(results[0].messages).toEqual([])
        })

        it('has errors', async () => {
            if (!badCodeExample) {
                return
            }
            // Run eslint on a bad code example to make sure all rules
            // will trigger on errors correctly
            const cli = new TSESLint.ESLint({
                useEslintrc: false,
                overrideConfigFile: require.resolve(moduleName),
            })
            const results = await cli.lintText(badCodeExample, {
                filePath: 'config/tests/example.js',
            })
            expect(results[0].messages).toHaveLength(badCodeMessageCount)
        })
    },
)
