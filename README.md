# @tophat/eslint-config

[![npm](https://img.shields.io/npm/v/@tophat/eslint-config.svg)](https://www.npmjs.com/package/@tophat/eslint-config)
[![npm downloads](https://img.shields.io/npm/dm/@tophat/eslint-config.svg)](https://npm-stat.com/charts.html?package=%40tophat%2Feslint-config)

:shark: Top Hat's shareable eslint configuration

## Usage

The default config includes the following:

- A set of base eslint rules for all JavaScript/TypeScript projects
- Rules for Jest tests
- Rules for web apps

Extend the default config by first installing all the required dependencies:

```bash
yarn add --dev \
    @tophat/eslint-config \
    eslint \
    prettier \
    eslint-config-prettier \
    eslint-plugin-prettier \
    eslint-plugin-jest \
    eslint-plugin-import \
    eslint-import-resolver-typescript \
    @typescript-eslint/eslint-plugin \
    @typescript-eslint/parser \
    @tophat/eslint-import-resolver-require \

```

If you wish to install lint rules for react apps, you can also optionally install:
```bash
yarn add --dev \
    eslint-plugin-react \
    eslint-plugin-react-hooks \
    eslint-plugin-jsx-a11y \
```

If your app uses react-query, you can also install:
```bash
yarn add --dev @tanstack/eslint-plugin-query
```

or

```bash
npm install --save-dev # etc ...
```

Then update your eslint config (for example, .eslintrc.js):

```javascript
module.exports = {
    extends: '@tophat'
}
```

Note: `@tophat/eslint-import-resolver-require` is an optional peer dependency and helps with Yarn Berry projects.

Note that Typescript is required.

## Picking and choosing certain configs

You can extend each of the configs separately by specifying them in your eslint config:

```javascript
module.exports = {
    extends: [
        // Pick and choose from the following list of configs
        '@tophat/eslint-config/base',
        '@tophat/eslint-config/react',
        '@tophat/eslint-config/jest',
        '@tophat/eslint-config/web',
    ]
}
```

## Peer dependencies per config

Each config requires certain peer dependencies:

- **base**: eslint, prettier, eslint-config-prettier, eslint-plugin-import, eslint-plugin-prettier
- **react**: eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-jsx-a11y, @tanstack/eslint-plugin-query
- **jest**: eslint-plugin-jest
- **web**: (none)

You only have to install the dependencies for the configs which you are using. Also note that all dependencies in the react package are optional, to support using this config in non-react apps.

## Upgrading this package

See the [CHANGELOG](./CHANGELOG.md).

## Making changes to this package

See the [CONTRIBUTING](./CONTRIBUTING.md) guide.
