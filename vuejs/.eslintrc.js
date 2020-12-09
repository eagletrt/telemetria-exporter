module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
      'semi': ['warn', 'always'],
      'quotes': ['warn', 'single'],
      'eol-last': ['warn'],
      'indent': ['warn', 4],
      'no-return-assign': ['off'],
      'space-before-function-paren': ['warn'],
      'no-unused-vars': 'off',
      'no-trailing-spaces': ['warn'],
      'no-console': ['off'],
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
}
