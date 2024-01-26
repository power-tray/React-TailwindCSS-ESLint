module.exports = {
  plugins: ['react'],
  env: { browser: true, es2021: true, node: true },
  extends: ['standard', 'plugin:react/recommended'],
  overrides: [{
    env: { node: true },
    files: ['.eslintrc.{js,cjs}'],
    parserOptions: { sourceType: 'script' }
  }],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true }
  },
  rules: {
    'space-before-function-paren': 0,
    'no-unneeded-ternary': 0,
    'react/prop-types': 0,
    'no-eval': 0
  }
}
