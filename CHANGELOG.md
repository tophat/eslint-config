# Changelog

All notable changes to this project will be documented using a format based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

<!-- MONODEPLOY:BELOW -->

## [3.0.0](https://github.com/tophat/eslint-config/compare/@tophat/eslint-config@2.0.0...@tophat/eslint-config@3.0.0) "@tophat/eslint-config" (2022-02-28)<a name="3.0.0"></a>

### Breaking Changes

* You will need to run `eslint --fix .` on your code base when adopting this update and it will sort all imports in your codebase. After this change, there will be a single correct order for all imports with an auto-fixing rule to correct them. ([60314c7](https://github.com/tophat/eslint-config/commits/60314c7))

### Features

* Alphabetize imports by import location ([60314c7](https://github.com/tophat/eslint-config/commits/60314c7))
* Alphabetize imports by import location (#208) ([60314c7](https://github.com/tophat/eslint-config/commits/60314c7))


## [2.0.0](https://github.com/tophat/eslint-config/compare/@tophat/eslint-config@1.0.2...@tophat/eslint-config@2.0.0) "@tophat/eslint-config" (2021-12-02)<a name="2.0.0"></a>

### Breaking Changes

* Update to eslint v8. ([7ae2766](https://github.com/tophat/eslint-config/commits/7ae2766))

### Features

* update to eslint v8, typescript plugin v5 with new recommendations (#207) ([7ae2766](https://github.com/tophat/eslint-config/commits/7ae2766))


## [1.0.2](https://github.com/tophat/eslint-config/compare/@tophat/eslint-config@1.0.1...@tophat/eslint-config@1.0.2) "@tophat/eslint-config" (2021-12-02)<a name="1.0.2"></a>

### Bug Fixes

* Set function to false ([ad733b3](https://github.com/tophat/eslint-config/commits/ad733b3))
* Set function to false (#206) ([ad733b3](https://github.com/tophat/eslint-config/commits/ad733b3))


## [1.0.1](https://github.com/tophat/eslint-config/compare/@tophat/eslint-config@1.0.0...@tophat/eslint-config@1.0.1) "@tophat/eslint-config" (2021-12-02)<a name="1.0.1"></a>

### Bug Fixes

* Exclude functions from no-use-before-define rule ([d9808f5](https://github.com/tophat/eslint-config/commits/d9808f5))
* Exclude functions from no-use-before-define rule (#205) ([d9808f5](https://github.com/tophat/eslint-config/commits/d9808f5))


## [0.12.0](https://github.com/tophat/eslint-config/compare/@tophat/eslint-config@0.11.0...@tophat/eslint-config@0.12.0) "@tophat/eslint-config" (2021-09-28)<a name="0.12.0"></a>

### Features

* Bump eslint dependencies (#201) ([4ce9808](https://github.com/tophat/eslint-config/commits/4ce9808))


## [0.11.0](https://github.com/tophat/eslint-config/compare/@tophat/eslint-config@0.10.5...@tophat/eslint-config@0.11.0) "@tophat/eslint-config" (2021-09-02)<a name="0.11.0"></a>

### Features

* **react**: do not allow unsafe react lifecycle methods ([acfa77c](https://github.com/tophat/eslint-config/commits/acfa77c))
* raise minimum versions of eslint, typescript, prettier ([acfa77c](https://github.com/tophat/eslint-config/commits/acfa77c))
* fallback to dependencies when peers for resolvers not provided ([acfa77c](https://github.com/tophat/eslint-config/commits/acfa77c))


## [0.10.5](https://github.com/tophat/eslint-config/compare/@tophat/eslint-config@0.10.4...@tophat/eslint-config@0.10.5) "@tophat/eslint-config" (2021-08-01)<a name="0.10.5"></a>

### Bug Fixes

* mark react peers as optional (#199) ([bdcdde7](https://github.com/tophat/eslint-config/commits/bdcdde7))


## [0.10.4](https://github.com/tophat/eslint-config/compare/@tophat/eslint-config@0.10.3...@tophat/eslint-config@0.10.4) "@tophat/eslint-config" (2021-07-29)<a name="0.10.4"></a>

### Bug Fixes

* Prevent tslint and prettier from fighting over semi-colons ([6a7db8c](https://github.com/tophat/eslint-config/commits/6a7db8c))
* swap order of configs ([6a7db8c](https://github.com/tophat/eslint-config/commits/6a7db8c))
* Prevent tslint and prettier from fighting over semi-colons (#197) ([6a7db8c](https://github.com/tophat/eslint-config/commits/6a7db8c))


## [0.10.3](https://github.com/tophat/eslint-config/compare/@tophat/eslint-config@0.10.2...@tophat/eslint-config@0.10.3) "@tophat/eslint-config" (2021-06-21)<a name="0.10.3"></a>

### Bug Fixes

* specify to use custom tophat resolver before node ([4144d8d](https://github.com/tophat/eslint-config/commits/4144d8d))
* specify to use custom tophat resolver before node (#196) ([4144d8d](https://github.com/tophat/eslint-config/commits/4144d8d))


## [0.10.2](https://github.com/tophat/eslint-config/compare/@tophat/eslint-config@0.10.1...@tophat/eslint-config@0.10.2) "@tophat/eslint-config" (2021-06-16)<a name="0.10.2"></a>

### Bug Fixes

* disable overzealous naming rule (#195) ([4be0b9c](https://github.com/tophat/eslint-config/commits/4be0b9c))


## [0.9.0](https://github.com/tophat/eslint-config/compare/@tophat/eslint-config@0.8.0...@tophat/eslint-config@0.9.0) "@tophat/eslint-config" (2021-06-01)<a name="0.9.0"></a>

### Features

* target prettier config v8, eslint v7, and node v14 (#186) ([af9ddcf](https://github.com/tophat/eslint-config/commits/af9ddcf))


## From 0.6.x to 0.7.x

The following deprecated rule was replaced (no new failures should be caused):

- [**jsx-a11y/label-has-for**](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md) was replaced with [**jsx-a11y/label-has-associated-control**](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md)

## From 0.5.x to 0.6.x

The following rules were added and will cause new linter failures:

- [**react-hooks/rules-of-hooks**](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks) (#71)
- [**react-hooks/exhaustive-deps**](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks) (#71)

## From 0.4.x to 0.5.x

The following rules were added and will cause new linter failures:

- [**quotes**](https://eslint.org/docs/rules/quotes)
    - Enabled to complement prettier's quotes settings in order to disable unnecessary template literals (#67)

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
