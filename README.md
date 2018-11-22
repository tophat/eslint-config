# @tophat/eslint-config

[![npm](https://img.shields.io/npm/v/@tophat/eslint-config.svg)](https://www.npmjs.com/package/@tophat/eslint-config)
[![CircleCI build](https://img.shields.io/circleci/project/github/tophat/eslint-config/master.svg)](https://circleci.com/gh/tophat/eslint-config)
[![npm downloads](https://img.shields.io/npm/dm/@tophat/eslint-config.svg)](https://npm-stat.com/charts.html?package=%40tophat%2Feslint-config)
[![Greenkeeper badge](https://badges.greenkeeper.io/tophat/eslint-config.svg)](https://greenkeeper.io/)

:shark: Top Hat's shareable eslint configuration

## Usage

```
yarn add --dev @tophat/eslint-config eslint prettier eslint-config-prettier eslint-plugin-prettier
```

or

```
npm install --save-dev @tophat/eslint-config eslint prettier eslint-config-prettier eslint-plugin-prettier
```

In your eslint config (for example .eslintrc.js):

```javascript
module.exports = {
    extends: '@tophat'
}
```

## React

If you are using React in your project, you can install the relevant plugins:

```
yarn add --dev eslint-plugin-react eslint-plugin-jsx-a11y # or npm install --save-dev ...
```

and extend the React configuration as well:

```javascript
module.exports = {
    extends: ['@tophat', '@tophat/react']
}
```

## Jest

Similarly for jest, you can install the relevant plugins:

```
yarn add --dev eslint-plugin-jest # or npm install --save-dev ...
```

and extend the Jest configuration:

```javascript
module.exports = {
    extends: ['@tophat', '@tophat/jest']
}
```
