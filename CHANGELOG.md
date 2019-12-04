# Changelog

## From 0.3.x to 0.4.x

Minimum peer dependency versions were bumped. (#55)

The following rules were changed and will cause fewer linter failures:

- [**jest/expect-expect**](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/expect-expect.md)
    - Whitelist `testSaga` and `expectSaga` as valid expectations (#54)

## From 0.3.0 to 0.3.1

The following rules were **removed** and will no longer cause linter failures:

- [**import/exports-last**](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md) (#48)

## From 0.2.x to 0.3.x

The following rules were added and will now cause linter failures:

- [**import/default**](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md) (#44)
- [**import/export**](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md) (#44)
- [**import/exports-last**](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md) (#44)
- [**import/named**](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md) (#44)
- [**import/newline-after-import**](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md) (#44)
- [**import/no-absolute-path**](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md) (#44)
- [**import/no-duplicates**](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md) (#44)
- [**import/no-mutable-exports**](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md) (#44)
- [**import/no-self-import**](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md) (#44)
- [**import/no-useless-path-segments**](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md) (#44)
- [**import/no-unresolved**](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md) (#44)
- [**import/order**](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md) (#44)

The following rules were loosened and will provide fewer errors:

- [**sort-imports**](https://eslint.org/docs/rules/sort-imports) (#44)

The included `parserOptions` config was moved back to the base config (#46). If you are extending the base config separately you no longer need to specify parser options (unless you want to set your own):

Before:

```javascript
modules.exports = {
    // ...
    parserOptions: {
      ecmaVersion: 9,
      sourceType: 'module',
      // ...
    },
    extends: [
        '@tophat/eslint-config/base',
        //...
    ],
    // ...
}
```

After:

```javascript
modules.exports = {
    // ...
    extends: [
        '@tophat/eslint-config/base',
        //...
    ],
    // ...
}
```

## From 0.1.x to 0.2.x

The following rules were added and will now cause linter failures:

- [**no-console**](https://eslint.org/docs/rules/no-console) (#24, #40)
- [**sort-imports**](https://eslint.org/docs/rules/sort-imports) (#33)

0.2.0 moved the base rules out of the default config (index.js) and into the base config (base.js). The default config now enables the "base", "react", "jest", and "web" configs automatically.

If you were previously extending all the configs, you only have to extend the default config now:

Before:

```javascript
modules.exports = {
    // ...
    extends: [
        '@tophat',
        '@tophat/eslint-config/react',
        '@tophat/eslint-config/jest',
        //...
    ],
    // ...
}
```

After:

```javascript
modules.exports = {
    // ...
    extends: [
        '@tophat',
        //...
    ],
    // ...
}
```

If you were previously extending the base config and want to maintain existing behaviour, make the following change to your eslintrc:

Before:

```javascript
modules.exports = {
    // ...
    extends: [
        '@tophat',
        //...
    ],
    // ...
}
```

After:

```javascript
modules.exports = {
    // ...
    parserOptions: {
      ecmaVersion: 9,
      sourceType: 'module',
      // ...
    },
    extends: [
        '@tophat/eslint-config/base',
        //...
    ],
    // ...
}
```
