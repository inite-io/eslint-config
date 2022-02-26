/* eslint-disable import/no-commonjs */
module.exports = {
  env: {
    node: true,
    mocha: true,
  },
  plugins: [
    'mocha',
  ],
  extends: [
    'eslint-config-werber/lib/defaults',
    'plugin:mocha/recommended',
  ],
  rules: {
    'no-unused-expressions': 'off',
    'mocha/no-mocha-arrows': 'off',
    'mocha/no-setup-in-describe': 'off',
    'mocha/no-skipped-tests': 'off',
    'mocha/no-disabled-tests': 'off'
  },
};
