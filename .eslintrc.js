module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "quotes": ["error", "double", "avoid-escape"],
    "semi": ["error", "never"],
    "linebreak-style": ["error", "windows"],
    "react/jsx-props-no-spreading": [0, {
      "explicitSpread": "ignore"
    }],
    "no-param-reassign": 0
  },
};
