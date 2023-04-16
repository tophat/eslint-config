# Contributing

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

Releases are triggered via a manual workflow action and accomplished via monodeploy.
