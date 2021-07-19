<p align="center"><img src="https://raw.githubusercontent.com/HughxDev/eslint-config-hughx/master/eslint-config-hughx.svg?sanitize=true" width="150" alt="logo" /></p>

<h1 align="center">eslint-config-hughx</h1>

<p align="center">Provides <a href="https://hughx.dev/from-github-elint-config-hughx">hughx</a>’s JavaScript conventions as <code>.eslintrc</code> shared configs.<br />Emphasizes readability and ease of writing.</p>

<p align="center"><a href="https://www.npmjs.com/package/eslint-config-hughx"><img src="https://img.shields.io/npm/dm/eslint-config-hughx.svg" alt="Downloads per month (NPM)"></a></p>

----

ℹ️ For TypeScript support, use [`eslint-config-hughx-ts`](https://github.com/HughxDev/eslint-config-hughx-ts) instead.

## Installation

### npm versions 7 and above

```zsh
npm install -D eslint-config-hughx
```

### yarn and older npm

You will have to install `peerDependencies` manually:

```zsh
# npm install -D
yarn add -D \
  eslint \
  eslint-config-airbnb-base \
  eslint-config-hughx \
  eslint-plugin-import
```

### React projects

```zsh
# npm install -D
yarn add -D \
  eslint \
  eslint-config-airbnb-base \
  eslint-config-hughx \
  eslint-plugin-import \
  eslint-plugin-jsx-a11y \
  eslint-plugin-react \
  eslint-plugin-react-hooks
```

## Usage

Extend `hughx` in your project’s `.eslintrc.js` or equivalent:

```js
module.exports = {
  "extends": [
    "hughx",
  ],
  // …
}
```

Eslint-config-hughx defaults to the latest version of JavaScript/ECMAScript at the time of release. If your transpiler isn’t set up for this (or you don’t use one), then you should override both `env.es*` and `parserOptions.ecmaVersion`, e.g.

```js
// Downgrading from ES2021 to ES6
module.exports = {
  "extends": [
    "hughx",
  ],
  "env": {
    "es2021": false,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 6
  }
};
```

## Environment-specific Configs

You can extend from one of the following to bring in sensible defaults for different use cases:

- `hughx/react`
- `hughx/node`
- `hughx/web-components`