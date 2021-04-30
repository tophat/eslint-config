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

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://noahnu.com/"><img src="https://avatars.githubusercontent.com/u/1297096?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Noah</b></sub></a><br /><a href="https://github.com/tophat/eslint-import-resolver-require/commits?author=noahnu" title="Code">💻</a> <a href="#infra-noahnu" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

To add a contributor to the README, signal the [all-contributors](https://allcontributors.org/) bot by adding comments in your PRs like so:

```
@all-contributors please add <username> for <contribution type>
```
