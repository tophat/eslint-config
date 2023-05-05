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

If the rule encounters a React type import of the format `import type React from 'react'` and it notices missing imports, it will add the missing imports by default while preserving the single import line. To do this, it will rewrite the import as `import { type default as React, useState } from 'react'`. This way, the rule plays nicely with rules that prevent duplicate import lines. To disable this behaviour, and have the eslint rule exit early if encountering a type import, set `skipDefaultReactTypeImport` to `true`:

```js
module.exports = {
    extends: ['plugin:@tophat/eslint-plugin-import/recommended'],
    plugins: ['@tophat/eslint-plugin-import'],
    rules: {
        '@tophat/import/prefer-non-default-react-imports': ['error', { skipDefaultReactTypeImport: true }],
    },
}
```
