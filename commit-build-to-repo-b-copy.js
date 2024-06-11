#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
  .usage('Copies and commits files from source code repo to the appropriate production-assets repo.')
  .example('node ./commit-build-to-repo-b-copy.js --help', 'Display help.')
  .example('node ./commit-build-to-repo-b-copy.js -s dev -v v1.0.0', 'Typical usage.')
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
  .alias('h', 'help') // boilerplate yargs
  .wrap(120)
  .parse();

console.log('hello world 2');
console.log(`running with ${JSON.stringify(argv, null, 2)}`);
