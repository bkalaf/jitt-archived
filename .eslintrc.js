module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'jest',
    'import',
    'prettier',
    'babel',
    'react',
    'react-hooks'
  ],
  env: {
    'jest/globals': true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warning',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended
    '
  ],
  rules: {
  }
}