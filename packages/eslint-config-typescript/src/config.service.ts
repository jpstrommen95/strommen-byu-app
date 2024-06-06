import { Linter } from 'eslint';

const config: Linter.Config = {
  parser: '@typescript-eslint/parser',
  extends: [
    '@strommen-byu/eslint-config',
    'airbnb-typescript',
  ],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'script', // Allows for the use of imports
    project: './tsconfig.json',
  },
  ignorePatterns: ['**/dist/'],
  rules: {
    indent: ['error', 2],
  },
};

export default config;
