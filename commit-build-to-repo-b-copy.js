#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv)).version(false).alias('h', 'help')
  .option('version', {
    alias: 'v',
    required: true,
    description: 'Version number to use in the commit.',
  })
  .parse();

console.log('hello world 2');
console.log(`running with ${JSON.stringify(argv, null, 2)}`);
