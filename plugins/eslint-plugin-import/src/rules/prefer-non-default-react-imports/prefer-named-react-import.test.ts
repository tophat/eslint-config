import { ESLintUtils } from '@typescript-eslint/utils'

import rule from '.'

const ruleTester = new ESLintUtils.RuleTester({
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
    },
})

describe('Prefer Non-Default React Imports', () => {
    ruleTester.run('@thm/shared-rules/prefer-non-default-react-imports', rule, {
        valid: [
            {
                code: [
                    "import React, { useState } from 'react'",
                    'const [x, setX] = useState(false)',
                ].join('\n'),
            },
            {
                code: [
                    "import { useState } from 'react'",
                    'const [x, setX] = useState(false)',
                ].join('\n'),
            },
            {
                code: [
                    "import { useState, useEffect, useRef } from 'react'",
                    'const [x, setX] = useState(false)',
                    'const r = useRef()',
                ].join('\n'),
            },
            {
                // we don't apply the rule when we encounter type imports
                // too difficult for now (but we welcome contributions to add support)
                code: [
                    "import type React from 'react'",
                    'const [x, setX] = useState(false)',
                ].join('\n'),
            },
        ],
        invalid: [
            {
                code: [
                    "import React from 'react'",
                    'const [x, setX] = React.useState(false)',
                ].join('\n'),
                output: [
                    "import React, { useState } from 'react'",
                    'const [x, setX] = useState(false)',
                ].join('\n'),
                errors: [
                    {
                        messageId: 'rewrite-import',
                        data: {
                            methods: 'useState',
                        },
                    },
                    {
                        messageId: 'rewrite-usage',
                        data: {
                            method: 'useState',
                        },
                    },
                ],
            },
            {
                // preserves existing imports
                code: [
                    "import React, { useEffect } from 'react'",
                    'const [x, setX] = React.useState(false)',
                    'const ref = React.useRef(false)',
                ].join('\n'),
                output: [
                    "import React, { useEffect, useRef, useState } from 'react'",
                    'const [x, setX] = useState(false)',
                    'const ref = useRef(false)',
                ].join('\n'),
                errors: [
                    {
                        messageId: 'rewrite-import',
                        data: {
                            methods: 'useRef, useState',
                        },
                    },
                    {
                        messageId: 'rewrite-usage',
                        data: {
                            method: 'useState',
                        },
                    },
                    {
                        messageId: 'rewrite-usage',
                        data: {
                            method: 'useRef',
                        },
                    },
                ],
            },

            // Custom methods
            {
                code: [
                    "import React from 'react'",
                    'const x = React.memo()',
                ].join('\n'),
                output: [
                    "import React, { memo } from 'react'",
                    'const x = memo()',
                ].join('\n'),
                options: [
                    {
                        methods: ['memo'],
                    },
                ],
                errors: [
                    {
                        messageId: 'rewrite-import',
                        data: {
                            methods: 'memo',
                        },
                    },
                    {
                        messageId: 'rewrite-usage',
                        data: {
                            method: 'memo',
                        },
                    },
                ],
            },
        ],
    })
})
