# @tophat/eslint-import-resolver-require

The simplest eslint import resolver plugin. All it does is expose node's require.

## Usage

```yml
# .eslintrc.yml
settings:
  import/resolver: "@tophat/eslint-import-resolver-require"
```

```js
// .eslintrc.js
module.exports = {
  settings: {
    'import/resolver': {
      '@tophat/eslint-import-resolver': {}
    }
  }
}
```
