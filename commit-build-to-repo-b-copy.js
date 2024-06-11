#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
  .example('node ./commit-build-to-repo-b-copy.js --help', 'Display help.')
  .example('node ./commit-build-to-repo-b-copy.js -s dev -v v1.0.0', 'Typical usage.')
  .alias('h', 'help') // give the default help flag a short alias
  .option('stage', {
    alias: 's',
    required: true,
    description: 'Stage to copy build files to.',
  })
  .version(false) // ignore yargs -v flag, so we can use a custom flag
  .option('version', {
    alias: 'v',
    required: true,
    description: 'Version number to use in the commit.',
  })
  .parse();

console.log('hello world 2');
console.log(`running with ${JSON.stringify(argv, null, 2)}`);
