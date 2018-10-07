module.exports = {
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  plugins: [
    'react'
  ],
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: '16.5'
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  }
}
