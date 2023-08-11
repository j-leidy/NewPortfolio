module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'testing-library'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:testing-library/react'
    ],
    rules: {
      'testing-library/prefer-screen-queries': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
    "env": {
        "browser": true,
        "amd": true,
        "node": true
    },
  };