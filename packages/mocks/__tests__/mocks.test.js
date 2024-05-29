'use strict';

const mocks = require('..');
const assert = require('assert').strict;

assert.strictEqual(mocks(), 'Hello from mocks');
console.info('mocks tests passed');
