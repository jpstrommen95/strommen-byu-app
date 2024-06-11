#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

/** From semver.org, see also https://regex101.com/r/vkijKf/1/. */
const semVerRegex = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

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
  .check(({ stage, version }) => {
    if (!['dev', 'prod'].includes(stage)) {
      throw new Error(`Invalid stage: ${stage}. Please use dev or prod.`);
    }

    if (!version) {
      throw new Error('Version must be truthy.');
    }

    if (!semVerRegex.test(version)) {
      throw new Error('Invalid version format. Please use a valid version format (ex: 1.0.0).');
    }

    console.log('Yargs check passed.');
    return true;
  })
  .alias('h', 'help') // boilerplate yargs
  .wrap(120)
  .parse();

const { stage, version } = argv;

function main() {
  console.log('hello world 2');
  console.log(`running with ${JSON.stringify([stage, version], null, 2)}`);
}

main();
