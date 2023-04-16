# prefer-workspace-aliases

This rule converts relative paths to a form that relies on Yarn aliases/links.

## Usage

In your `.eslintrc.js` file:

```js
module.exports = {
    extends: ['plugin:@tophat/eslint-plugin-import/recommended'],
    plugins: ['@tophat/eslint-plugin-import'],
    rules: {
        '@tophat/import/prefer-workspace-aliases': 'error',
    },
}
```

## Performance

Performance is not great at the moment. We welcome contributions to improve performance.
