# @tophat/eslint-config

[![npm](https://img.shields.io/npm/v/@tophat/eslint-config.svg)](https://www.npmjs.com/package/@tophat/eslint-config)
[![CircleCI build](https://img.shields.io/circleci/project/github/tophat/eslint-config/master.svg)](https://circleci.com/gh/tophat/eslint-config)
[![npm downloads](https://img.shields.io/npm/dm/@tophat/eslint-config.svg)](https://npm-stat.com/charts.html?package=%40tophat%2Feslint-config)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=tophat/eslint-config)](https://dependabot.com)

:shark: Top Hat's shareable eslint configuration

## Usage

The default config includes the following:

- A set of base eslint rules for all JavaScript projects
- Rules for React apps
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
    eslint-plugin-react \
    eslint-plugin-jsx-a11y \
    eslint-plugin-jest
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

- **base**: eslint, prettier, eslint-config-prettier, eslint-plugin-prettier
- **react**: eslint-plugin-react, eslint-plugin-jsx-a11y
- **jest**: eslint-plugin-jest
- **web**: (none)

You only have to install the dependencies for the configs which you are using.

## Upgrading this package

### From 0.1.4 to 0.2.0

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
    extends: [
        '@tophat/eslint-config/base',
        //...
    ],
    // ...
}
```

## Making changes to this package

This eslint config is for Top Hat's open source and internal use, so we generally won't be accepting external contributions.
If you are an external contributor and you have a rule that you really feel should be included in our global config, feel free to make a suggestion, but please don't take it personally if we decide not to adopt the rule.
Eslint configs are really easy to extend, so feel free to do exactly that with this one and make your own based off of it!
You can learn more from the eslint docs for [creating shareable configs](https://eslint.org/docs/developer-guide/shareable-configs).

### Semantic versioning

It's very important to be cognizant of [semantic versioning](https://semver.org/) when creating a shared eslint config.
Almost any change (in particular adding or changing lint rules) will likely cause builds to fail for those using the config, so most changes will be considered _breaking_, requiring a major version bump.
That's okay --- just make sure you are appropriately incrementing the version number when making a release.

### Adding new rules

First, open an issue in this repo and mark it as an RFC (request for comments).
Within the issue, outline the rule you would like to add, why you would like to add it, and the expected impact the rule will have on Top Hat open source and internal projects.
Ask members of the Top Hat organization to give any feedback on the rule, voting with :thumbsup: or :thumbsdown: on the issue, indicating whether or not they would like to enable it.
In the event that the rule is non-controversial and has majority approval :thumbsup:, create a pull request to enable it (linking to the original RFC), get it reviewed, and merge it in.

### Making a release

When the build passes on master, the [project owners](https://github.com/tophat/getting-started/blob/master/project-owners-and-responsibilities.md#project-owners) will make a release by using yarn and pushing the git tag it creates:

```
yarn version --major|--minor|--patch # choose the appropriate semver increment
git push --tags origin master
```

CircleCI will run the build on the tag and deploy a new version.
