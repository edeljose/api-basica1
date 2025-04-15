// eslint.config.mjs
import eslint from 'eslint/use-at-your-own-risk';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
    },
    plugins: {
      eslint: eslint,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
    },
  },
];

