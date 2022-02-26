/* eslint-disable import/no-commonjs */
module.exports = {
  env: {
    browser: true,
  },
  plugins: [
    'vue',
    'chai-friendly'
  ],
  extends: [
    'eslint-config-inite-io/lib/defaults',
    'plugin:vue/recommended',
  ],
  overrides: [
    {
      files: ['**/*.vue'],
      rules: {
        'import/prefer-default-export': 'error',
      },
    },
  ],
  rules: {
    'no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': 2,
    semi: [2, 'always']
  }
};
