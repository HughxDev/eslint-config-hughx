module.exports = {
  "extends": [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
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
    "react/jsx-curly-spacing": [
      2,
      {
        "when": "always",
        "children": true,
      },
    ],
  },
  "settings": {
    "react": {
      "version": "detect",
    },
  },
};
