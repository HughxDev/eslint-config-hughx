module.exports = {
  "extends": [
    "hughx",
    "plugin:react/recommended",
  ],
  "env": {
    "browser": true,
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    },
  },
  "rules": {
    "react/jsx-curly-spacing": [2, { "when": "always", "children": true }],
  },
};
