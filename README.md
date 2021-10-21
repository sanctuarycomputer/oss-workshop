## API Reference

### `sum`

Adds two numbers

example:

```
const result = sum(1, 2)
// result === 3
```

### `arrayify`

TODO - add description and example

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
