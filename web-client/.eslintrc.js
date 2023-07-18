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
    quotes: ['error', 'single'],
    indent: ['error', 2, { SwitchCase: 1 }],
    semi: 'off',
    '@typescript-eslint/semi': 'off',
    'no-extra-semi': ['error'],
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off'
  }
}
