module.exports = {
  "extends": [
    "plugin:wc/recommended",
  ],
  "env": {
    "browser": true,
  },
  "parserOptions": {
    "sourceType": "module",
  },
  "rules": {
    "import/extensions": [
      "error", "always",
    ],
  },
};
