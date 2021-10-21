## API Reference

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

### `sum`

Adds two numbers

example:

```
const result = sum(1, 2)
// result === 3
```

### `arrayify`

Create an array. Pass in a value to get it back as an array. If it already is an array, it will be passed back as-is.

```
const result = arrayify(1, 2, 3)
// result === [1, 2, 3]
```

or

```
const array = [1, 2, 3]
const result = arrayify(array)
// result === [1, 2, 3]
```

### `capitalize`

TODO - add description and example

## Local Development

**Testing**: Test your changes with `yarn test` or `yarn test:watch`

**Commit messages**: This repo follows the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) guidelines. Make your commit messages in the following format:

```
<type>[scope]: <description>

[optional body]

[optional footer(s)]
```

Use the appropriate `type` for what your commit does:

- `feat`: adds a new feature
- `test`: adds or improves tests
- `chore`: odd jobs that do not affect the functionality of the code
- `ci`: makes changes to the CI
- `docs`: adds or improves documentation
- `perf`: makes performance improvements
- `style`: makes styling changes
- `refactor`: internal changes have been made, but API input and output remain the same

⚠️ Include **BREAKING CHANGE** within your description if your updates change the API for any of the exported modules.

And the `scope` is one of:

- `lib`: changes to anything within `./src`
- `repo`: repository-level changes (such as linting config, etc)

Some examples:

```
chore(repo): update eslint config
feat(lib): add new 'sum' export
test(lib): add more tests for arrayify
ci(repo): fix Publish to NPM workflow
refactor(lib): convert JS files to typescript
perf(lib): improve performance for arrayify
feat(lib): BREAKING CHANGE replace second argument of function X to options object
```

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.good-idea.studio"><img src="https://avatars.githubusercontent.com/u/11514928?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Joseph Thomas</b></sub></a><br /><a href="#blog-good-idea" title="Blogposts">📝</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- prettier-ignore -->
<!-- ALL-CONTRIBUTORS-LIST:END -->
