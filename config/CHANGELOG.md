# Changelog

All notable changes to this project will be documented using a format based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

<!-- MONODEPLOY:BELOW -->

## [9.0.0](https://github.com/tophat/eslint-config/compare/@tophat/eslint-config@8.0.1...@tophat/eslint-config@9.0.0) "@tophat/eslint-config" (2023-10-02)<a name="9.0.0"></a>

### Breaking Changes

* Min TypeScript version is now v5.2.2 and min. @typescript-eslint version is 6.7.3. The typescript-eslint v6 change may bring in other changes to the default rules. ([48bb6e0](https://github.com/tophat/eslint-config/commits/48bb6e0))

### Bug Fixes

* removed no-confusing-void-expressions rule (#314) ([c483dd1](https://github.com/tophat/eslint-config/commits/c483dd1))
* simplify migration to v9 (#325) ([c36a3c4](https://github.com/tophat/eslint-config/commits/c36a3c4))
* disable rules to ease v9 migration (#326) ([6b8063b](https://github.com/tophat/eslint-config/commits/6b8063b))

### Dependencies

* update min TypeScript version and TypeScript plugins (#318) ([48bb6e0](https://github.com/tophat/eslint-config/commits/48bb6e0))




## [8.0.1](https://github.com/tophat/eslint-config/compare/@tophat/eslint-config@8.0.0...@tophat/eslint-config@8.0.1) "@tophat/eslint-config" (2023-08-31)<a name="8.0.1"></a>

### Bug Fixes

* ignore no-confusing-void-expression as it changes code behaviour ([9421ea6](https://github.com/tophat/eslint-config/commits/9421ea6))
* ignore no-confusing-void-expression as it changes code behaviour (#307) ([9421ea6](https://github.com/tophat/eslint-config/commits/9421ea6))




## [8.0.0](https://github.com/tophat/eslint-config/compare/@tophat/eslint-config@7.0.4...@tophat/eslint-config@8.0.0) "@tophat/eslint-config" (2023-08-29)<a name="8.0.0"></a>

### Breaking Changes

* This repo has been updated to prettier v3 and peerDependency ranges have been updated to require v3 for consumers. You can find the migration steps here https://prettier.io/blog/2023/07/05/3.0.0.html for adopting the changes, most of which should be minimal for consumers. ([28a9cc9](https://github.com/tophat/eslint-config/commits/28a9cc9))

### Dependencies

* Update to prettier v3 ([28a9cc9](https://github.com/tophat/eslint-config/commits/28a9cc9))
* Update to prettier v3 (#302) ([28a9cc9](https://github.com/tophat/eslint-config/commits/28a9cc9))




## [7.0.4](https://github.com/tophat/eslint-config/compare/@tophat/eslint-config@7.0.3...@tophat/eslint-config@7.0.4) "@tophat/eslint-config" (2023-07-17)<a name="7.0.4"></a>

### Dependencies

* minor dependencies updates (#296) ([f3e6fab](https://github.com/tophat/eslint-config/commits/f3e6fab))




## [7.0.3](https://github.com/tophat/eslint-config/compare/@tophat/eslint-config@7.0.2...@tophat/eslint-config@7.0.3) "@tophat/eslint-config" (2023-07-17)<a name="7.0.3"></a>

### Dependencies

* update dependencies to latest within semver range (#291) ([28c472d](https://github.com/tophat/eslint-config/commits/28c472d))




## [7.0.2](https://github.com/tophat/eslint-config/compare/@tophat/eslint-config@7.0.1...@tophat/eslint-config@7.0.2) "@tophat/eslint-config" (2023-06-23)<a name="7.0.2"></a>

### Dependencies

* Update typescript, yarn, and monodeploy to latest (#287) ([4bd8adc](https://github.com/tophat/eslint-config/commits/4bd8adc))




## [7.0.0](https://github.com/tophat/eslint-config/compare/@tophat/eslint-config@6.0.2...@tophat/eslint-config@7.0.0) "@tophat/eslint-config" (2023-04-16)<a name="7.0.0"></a>

### Breaking Changes

* Since we are setting the @tanstack/query/prefer-query-object-syntax, this will require changes to your code that satisfy the rule before CI will pass. You will no longer be able to skip these changes. ([9f0f705](https://github.com/tophat/eslint-config/commits/9f0f705))
* The internals of @tophat/eslint-config have been
refactored to better support a build step in the @tophat/eslint-config
project. If you are using the default @tophat/eslint-config config in
your eslint configuration file, there is no impact to you. However, if
you specify individual subsets, for example, @tophat/eslint-config/jest
then you must use tooling that supports the package.json exports map
format. Most modern tooling supports this. ([9f0f705](https://github.com/tophat/eslint-config/commits/9f0f705))

### Features

* use package.json export maps for rule subsets ([9f0f705](https://github.com/tophat/eslint-config/commits/9f0f705))
* adopt recommended config for tanstack eslint-plugin-query (#274) ([9f0f705](https://github.com/tophat/eslint-config/commits/9f0f705))




## [6.0.2](https://github.com/tophat/eslint-config/compare/@tophat/eslint-config@6.0.1...@tophat/eslint-config@6.0.2) "@tophat/eslint-config" (2023-04-16)<a name="6.0.2"></a>

### Bug Fixes

* prefix prefer-workspace-aliases with @tophat ([3b9ccac](https://github.com/tophat/eslint-config/commits/3b9ccac))
* published packages missing lib files ([3b9ccac](https://github.com/tophat/eslint-config/commits/3b9ccac))




## [6.0.1](https://github.com/tophat/eslint-config/compare/@tophat/eslint-config@6.0.0...@tophat/eslint-config@6.0.1) "@tophat/eslint-config" (2023-02-03)<a name="6.0.1"></a>

### Bug Fixes

* disable react/jsx-no-leaked-render in TypeScript components (#232) ([afe0bd6](https://github.com/tophat/eslint-config/commits/afe0bd6))


## [6.0.0](https://github.com/tophat/eslint-config/compare/@tophat/eslint-config@5.0.0...@tophat/eslint-config@6.0.0) "@tophat/eslint-config" (2023-02-01)<a name="6.0.0"></a>

### Breaking Changes

* We are expanding your list of typescript rules which requires connecting your eslint config to your tsconfig. See the typescript-eslint documentation https://typescript-eslint.io/linting/typed-linting for how to do this. If your project does not use typescript and you do not want to add a tsconfig file needlessly, disable the following rules in your config: @typescript-eslint/no-confusing-void-expression, @typescript-eslint/no-for-in-array, @typescript-eslint/prefer-includes, @typescript-eslint/prefer-reduce-type-parameter, and @typescript-eslint/prefer-string-starts-ends-with. ([a4d50f5](https://github.com/tophat/eslint-config/commits/a4d50f5))

### Dependencies

* Update dependencies to latest version ([8b5b97f](https://github.com/tophat/eslint-config/commits/8b5b97f))
* Update dependencies to latest version (#230) ([8b5b97f](https://github.com/tophat/eslint-config/commits/8b5b97f))

### Features

* Expand list of typescript rules ([a4d50f5](https://github.com/tophat/eslint-config/commits/a4d50f5))
* Expand list of typescript rules (#231) ([a4d50f5](https://github.com/tophat/eslint-config/commits/a4d50f5))


## [5.0.0](https://github.com/tophat/eslint-config/compare/@tophat/eslint-config@4.2.1...@tophat/eslint-config@5.0.0) "@tophat/eslint-config" (2023-01-23)<a name="5.0.0"></a>

### Breaking Changes

* We've adopted the recommended ruleset from the `eslint-plugin-jsx-a11y` package. We previously only included a few of their rules. To adopt, we recommend updating to the new version, running linting locally (or on CI), then changing any rules that have errors to 'warn' in your local config. ([08283c8](https://github.com/tophat/eslint-config/commits/08283c8))

### Features

* Enforce stricter a11y rules (#228) ([08283c8](https://github.com/tophat/eslint-config/commits/08283c8))


## [4.2.1](https://github.com/tophat/eslint-config/compare/@tophat/eslint-config@4.2.0...@tophat/eslint-config@4.2.1) "@tophat/eslint-config" (2023-01-11)<a name="4.2.1"></a>

### Bug Fixes

* Allow spreading props in tests (#229) ([acb42e9](https://github.com/tophat/eslint-config/commits/acb42e9))


## [4.2.0](https://github.com/tophat/eslint-config/compare/@tophat/eslint-config@4.1.0...@tophat/eslint-config@4.2.0) "@tophat/eslint-config" (2023-01-11)<a name="4.2.0"></a>

### Features

* Add new react warnings for best practices ([506a914](https://github.com/tophat/eslint-config/commits/506a914))
* Add new react warnings for best practices (#226) ([506a914](https://github.com/tophat/eslint-config/commits/506a914))


## [4.1.0](https://github.com/tophat/eslint-config/compare/@tophat/eslint-config@4.0.0...@tophat/eslint-config@4.1.0) "@tophat/eslint-config" (2023-01-10)<a name="4.1.0"></a>

### Features

* Add react-query eslint plugin and rules ([e5fa0f8](https://github.com/tophat/eslint-config/commits/e5fa0f8))
* Add react-query eslint plugin and rules (#221) ([e5fa0f8](https://github.com/tophat/eslint-config/commits/e5fa0f8))


## [4.0.0](https://github.com/tophat/eslint-config/compare/@tophat/eslint-config@3.3.0...@tophat/eslint-config@4.0.0) "@tophat/eslint-config" (2022-11-15)<a name="4.0.0"></a>

### Breaking Changes

* @typescript-eslint must be updated to v5.43.0 or higher. All type imports should be imported using inline type syntax. There's an autofixer for this, so you'll need to fix your code base upon accepting this change. ([18770fa](https://github.com/tophat/eslint-config/commits/18770fa))

### Dependencies

* Update all dependencies to latest version (#216) ([c70c53c](https://github.com/tophat/eslint-config/commits/c70c53c))

### Features

* Enforce inline-types for typescript (#218) ([18770fa](https://github.com/tophat/eslint-config/commits/18770fa))


## [3.3.0](https://github.com/tophat/eslint-config/compare/@tophat/eslint-config@3.2.1...@tophat/eslint-config@3.3.0) "@tophat/eslint-config" (2022-08-02)<a name="3.3.0"></a>

### Features

* **react**: use default arguments for function components (#215) ([a46d886](https://github.com/tophat/eslint-config/commits/a46d886))


## [3.2.1](https://github.com/tophat/eslint-config/compare/@tophat/eslint-config@3.2.0...@tophat/eslint-config@3.2.1) "@tophat/eslint-config" (2022-07-19)<a name="3.2.1"></a>

### Bug Fixes

* treat .d.mts and .d.cts files like .d.ts (#212) ([af2b923](https://github.com/tophat/eslint-config/commits/af2b923))

### Dependencies

* update all dependencies to latest version (#214) ([bca0e98](https://github.com/tophat/eslint-config/commits/bca0e98))


## [3.2.0](https://github.com/tophat/eslint-config/compare/@tophat/eslint-config@3.1.0...@tophat/eslint-config@3.2.0) "@tophat/eslint-config" (2022-06-17)<a name="3.2.0"></a>

### Bug Fixes

* Add _ exclusions to no-unused-vars rule ([76df491](https://github.com/tophat/eslint-config/commits/76df491))
* Add _ exclusions to no-unused-vars rule (#210) ([76df491](https://github.com/tophat/eslint-config/commits/76df491))

### Features

* include cjs, cts, mjs, mts file extensions (#211) ([632b363](https://github.com/tophat/eslint-config/commits/632b363))


## [3.1.0](https://github.com/tophat/eslint-config/compare/@tophat/eslint-config@3.0.0...@tophat/eslint-config@3.1.0) "@tophat/eslint-config" (2022-02-28)<a name="3.1.0"></a>

### Features

* Separate tophat packages into their own group after external ([4f737df](https://github.com/tophat/eslint-config/commits/4f737df))
* Separate tophat packages into their own group after external (#209) ([4f737df](https://github.com/tophat/eslint-config/commits/4f737df))


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
