const config = {
  extends: [
    '@strommen-byu/eslint-config',
    'airbnb-typescript',
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    indent: ['error', 6],
  },
};

export default config;
