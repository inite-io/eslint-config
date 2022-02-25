/* eslint-disable import/no-commonjs */
module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
  ],
  rules: {
    'space-before-function-paren': ['error', 'always'],
    'func-names': 'error',
    'arrow-parens': ['error', 'always'],
    'no-param-reassign': ['error', {
      props: false,
    }],
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
    'import/no-commonjs': 'off',
    'import/prefer-default-export': 'off',
  },
  ignorePatterns: ["node_modules/", "website/blockchain/", "website/client/vue.config.js"]
};
