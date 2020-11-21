module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    'react-native/react-native': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  plugins: [
    'react', 'react-native',
  ],
  rules: {
    'no-console': ['off'],
    'import/no-named-as-default': ['off'],
    'import/no-named-as-default-member': ['off'],
    'max-len': ['warn'],
    'linebreak-style': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/prefer-stateless-function': ['off'],
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    // 'react-native/no-inline-styles': 2,
    // 'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'react/forbid-prop-types': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'no-nested-ternary': ['off'],
    'no-empty-pattern': ['warn'],
    'arrow-body-style': ['warn']
  },
};
