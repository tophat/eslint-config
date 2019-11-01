import { CLIEngine } from 'eslint'
import prettierReactRules from 'eslint-config-prettier/react'
import prettierRules from 'eslint-config-prettier'

const allPrettierRules = Object.keys(prettierRules.rules).concat(
    Object.keys(prettierReactRules.rules),
)

const configs = [
    {
        file: 'index.js',
        codeExample: `export default function(a, b) {
    return a + b
}
`,
    },
    {
        file: 'base.js',
        codeExample: `function foo(a, b) {
    return a + b
}

foo(1, 2)
`,
    },
    {
        file: 'react.js',
        codeExample: `
var React = require('react')
var PropTypes = require('prop-types')

function MyComponent(props) {
    return <div>Hi, {props.name}!</div>
}

MyComponent.propTypes = {
    name: PropTypes.string.isRequired
}
        `,
    },
    {
        file: 'jest.js',
        codeExample: `
describe('Some suite', function() {
    it('runs some test', function() {
        expect(1 + 1).toBe(2)
    })
})
        `,
    },
    {
        file: 'web.js',
        codeExample: `
var React = require('react')
var ReactDOM = require('react-dom')
var element = document.getElementById('dawg')
ReactDOM.render(React.createElement('div'), element)
        `,
    },
]

configs.forEach(({ file, codeExample }) => {
    const config = require(`../${file}`)

    describe(`${file} config`, () => {
        it("doesn't include any rules superseded by prettier", () => {
            const baseRules = Object.keys(config.rules)
            baseRules.forEach(baseRule => {
                expect(allPrettierRules).not.toContain(baseRule)
            })
        })

        it('has no errors', () => {
            // Run eslint on a minimal code example to make sure all rules
            // are named and configured correctly
            const cli = new CLIEngine({ useEslintrc: false, configFile: file })
            const result = cli.executeOnText(codeExample)
            expect(result.results[0].messages).toEqual([])
        })
    })
})
