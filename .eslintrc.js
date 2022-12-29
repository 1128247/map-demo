module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  "parser": "@typescript-eslint/parser",
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  overrides: [
    {
      files: ['src/**/*.ts', 'src/**/*.tsx']
    }
  ],
  ignorePatterns: ['**/*.config.js', '**/*.js'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-debugger': 'off',
    'no-unused-vars': [
      'error',
      // we are only using this rule to check for unused arguments since TS
      // catches unused variables but not args.
      { varsIgnorePattern: '.*', args: 'none' }
    ],
  }
};
