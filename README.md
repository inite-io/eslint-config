inite-eslint-config
===
Shared linting configuration for [Inite](https://inite.io) projects.

## Version 6
- [index.js](index.js): link to node.js configuration
- [node.js](lib/node.js): configuration for server side and Node.js projects
- [vue.js](lib/vue.js): configuration for Vue.js projects
- [mocha.js](lib/mocha.js): configuration for Mocha test files

A set of reusable ESLint rules based on [Airbnb JavaScript Style Guide() {](https://github.com/airbnb/javascript).

Information about installation and usage can be found at http://eslint.org/docs/developer-guide/shareable-configs.

### node

```json
{
  "extends": "inite-io/node",
  "rules": {
    "locally-overriden-rule": 1
  }
}
```

### vue

For usage see https://github.com/vuejs/eslint-plugin-vue. Right now all reccomended rules are enabled.

```json
{
  "extends": "inite-io/vue",
  "rules": {
    "locally-overriden-rule": 1
  }
}
```

## Version 4

- [index.js](https://github.com/HabitRPG/eslint-config/blob/v4.0.0/index.js): base configuration
- [server.js](https://github.com/HabitRPG/eslint-config/blob/v4.0.0/server.js): special rules for code on the server
- [browser.js](https://github.com/HabitRPG/eslint-config/blob/v4.0.0/browser.js): special rules for code on the browser
- [esnext.js](https://github.com/HabitRPG/eslint-config/blob/v4.0.0/esnext.js): special rules for es6 code
- [mocha.js](https://github.com/HabitRPG/eslint-config/blob/v4.0.0/mocha.js): special rules for the moch test framework

### Consuming

Install the module

```bash
npm i -D inite-io-eslint-config
```

In your project's `.eslintrc`:

### default

```json
{
  "extends": "inite-io",
  "rules": {
    "locally-overriden-rule": 1
  }
}
```

### browser/browserify

```json
{
  "extends": "inite-io/browser",
  "rules": {
    "locally-overriden-rule": 1
  }
}
```

### mocha

**Note:** The mocha config requires you to install [eslint-plugin-mocha](http://npmjs.com/eslint-plugin-mocha)

```bash
npm install -D eslint-plugin-mocha eslint-config-habitrpg
```

```json
{
  "extends": "inite-io/mocha",
  "rules": {
    "locally-overriden-rule": 1
  }
}
```

---

You can specify a `.eslintrc` for a subdirectory to change the rules that are enforced. For instance, in a node project you could extend from `habitrpg/server` at the top-level, `habitrpg/mocha` in your `test/.eslintrc` and `habitrpg/browser` at the `browser-files/.eslintrc` level.
