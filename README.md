# @tophat/eslint-config

[![npm](https://img.shields.io/npm/v/@tophat/eslint-config.svg)](https://www.npmjs.com/package/@tophat/eslint-config)
[![npm downloads](https://img.shields.io/npm/dm/@tophat/eslint-config.svg)](https://npm-stat.com/charts.html?package=%40tophat%2Feslint-config)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

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
    @tophat/eslint-import-resolver-require

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
    extends: '@tophat/eslint-config'
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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://noahnu.com/"><img src="https://avatars.githubusercontent.com/u/1297096?v=4?s=50" width="50px;" alt="Noah"/><br /><sub><b>Noah</b></sub></a><br /><a href="https://github.com/tophat/eslint-config/commits?author=noahnu" title="Code">💻</a> <a href="#infra-noahnu" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/dbasilio"><img src="https://avatars.githubusercontent.com/u/8311284?v=4?s=50" width="50px;" alt="Daniel Basilio"/><br /><sub><b>Daniel Basilio</b></sub></a><br /><a href="https://github.com/tophat/eslint-config/commits?author=dbasilio" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.karnov.club/"><img src="https://avatars.githubusercontent.com/u/6210361?v=4?s=50" width="50px;" alt="Marc Cataford"/><br /><sub><b>Marc Cataford</b></sub></a><br /><a href="#infra-mcataford" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td align="center" size="13px" colspan="7">
        <img src="https://raw.githubusercontent.com/all-contributors/all-contributors-cli/1b8533af435da9854653492b1327a23a4dbd0a10/assets/logo-small.svg">
          <a href="https://all-contributors.js.org/docs/en/bot/usage">Add your contributions</a>
        </img>
      </td>
    </tr>
  </tfoot>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
