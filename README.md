# eslint-config

[![npm](https://img.shields.io/npm/v/@tophat/eslint-config.svg)](https://www.npmjs.com/package/@tophat/eslint-config)
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

If you are using react and/or jest in your project, you can also extend the provided configs:

```javascript
module.exports = {
    extends: ['@tophat', '@tophat/react', '@tophat/jest']
}
```
