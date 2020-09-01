<p align="center"><img src="https://raw.githubusercontent.com/hguiney/eslint-config-hughx/master/eslint-config-hughx.svg?sanitize=true" width="150" alt="logo" /></p>

<h1 align="center">eslint-config-hughx</h1>

<p align="center">Provides <a href="https://hughx.com">hughx</a>’s JavaScript conventions as <code>.eslintrc</code> shared configs. Emphasizes readability and ease of writing.</p>

<p align="center"><a href="https://www.npmjs.com/package/eslint-config-hughx"><img src="https://img.shields.io/npm/dm/eslint-config-hughx.svg" alt="Downloads per month (NPM)"></a></p>

---

## Installation

```shell
yarn add -D eslint-config-hughx eslint-config-airbnb-base eslint-plugin-import
```
OR
```shell
npm install -D eslint-config-hughx eslint-config-airbnb-base eslint-plugin-import
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

## Environment-specific Configs

- `hughx/react`
- `hughx/node`
- `hughx/web-components`