module.exports = {
  "env": {
    "es2021": true,
    "jest": true,
  },
  "parserOptions": {
    "ecmaVersion": 2021,
  },
  "rules": {
    'space-in-parens': ['error', 'always'],
    'no-console': 'off',
    'no-param-reassign': 'off',
    "quotes": 'off',
    'quote-props': ['error', 'always'],
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'no-lonely-if': 'off',
    'max-len': 'off',
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
  },
};
