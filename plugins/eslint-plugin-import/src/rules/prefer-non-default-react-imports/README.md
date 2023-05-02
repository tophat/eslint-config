# prefer-non-default-react-imports

This rule prefers `useState` syntax over `React.useState` syntax. It is auto-fixable.

## Usage

In your `.eslintrc.js` file:

```js
module.exports = {
    extends: ['plugin:@tophat/eslint-plugin-import/recommended'],
    plugins: ['@tophat/eslint-plugin-import'],
    rules: {
        '@tophat/import/prefer-non-default-react-imports': 'error',
    },
}
```

### Good

```js
import React, { useEffect } from 'react'

function Component() {
    useEffect(() => {}, [])
}
```

### Bad

```js
import React from 'react'

function Component() {
    React.useEffect(() => {}, [])
}
```

### Custom Methods

You can override the default list of methods by setting `methods`:

```js
module.exports = {
    extends: ['plugin:@tophat/eslint-plugin-import/recommended'],
    plugins: ['@tophat/eslint-plugin-import'],
    rules: {
        '@tophat/import/prefer-non-default-react-imports': ['error', { methods: ['useEffect'] }],
    },
}
```

## Limitations

The rule exits early if it encounters import aliases in the React import, or if there's a React type import such as `import type React from 'react'`. This is to reduce complexity of the implementation, however contributions to add better support for these scenarios is welcome.
