/* eslint-disable import/no-extraneous-dependencies */ // this is a config file, not a src file
// Sets up testing environment to support `npm run test` through default `react-scripts` config

import '@testing-library/jest-dom';
import { jest } from '@jest/globals';

global.console = {
  ...console,
  // log: jest.fn(),
  debug: jest.fn(),
  // info: jest.fn(),
  // warn: jest.fn(),
  // error: jest.fn(),
};
