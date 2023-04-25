module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react'
  ],
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'quotes': ['error', 'single'],
    'indent': ['error', 2],
    'semi': 'off',
    '@typescript-eslint/semi': 'off',
    'no-extra-semi': ['error'],
    // '@typescript-eslint/strict-boolean-expressions': ['error', { allowNullable: true, ignoreRhs: true }]
    "@typescript-eslint/strict-boolean-expressions": 0,
    "@typescript-eslint/space-before-function-paren": "off",
  }
}
