#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');
const moment = require('moment');

/** From semver.org, see also https://regex101.com/r/vkijKf/1/. */
const semVerRegex = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

const argv = yargs(hideBin(process.argv))
  .usage('Copies and commits files from source code repo to the appropriate hosting-assets repo.')
  .example('node ./commit-build-to-repo-b-copy.js --help', 'Display help.')
  .example('node ./commit-build-to-repo-b-copy.js -s dev -v 1.0.0', 'Typical usage.')
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

function getRelPathToDestRepo({ stage }) {
  switch (stage) {
    case 'dev':
      return '../dev-html-root';
    case 'prod':
      return '../prod-html-root';
    default:
      throw new Error(`Invalid stage provided: ${stage}`);
  }
}

function getRepoPaths({ stage }) {
  const srcCodeRepoDir = process.cwd();
  const destRepoRelativePath = getRelPathToDestRepo({ stage });
  const hostingAssetRepoDir = path.join(srcCodeRepoDir, destRepoRelativePath);

  return { srcCodeRepoDir, hostingAssetRepoDir };
}

function validateRepos({ srcCodeRepoDir, hostingAssetRepoDir }) {
  if (!fs.existsSync(hostingAssetRepoDir)) {
    throw new Error(`Directory ${hostingAssetRepoDir} does not exist. Please ensure the appropriate hosting-assets repo is cloned as a sibling directory.`);
  }

  const buildDir = path.join(srcCodeRepoDir, 'build');
  if (!fs.existsSync(buildDir)) {
    throw new Error(`Build directory ${buildDir} does not exist. Please ensure you have built the project from the source code repo.`);
  }
}

function shouldDelete(item) {
  const filesToPreserve = [
    '.git',
    'readme.md',
    '.cpanel.yml',
    'license.md',
  ];

  return !filesToPreserve.includes(item);
}

function clearDestRepo({ hostingAssetRepoDir }) {
  const repoBContents = fs.readdirSync(hostingAssetRepoDir);
  const contentsToDelete = repoBContents.filter(shouldDelete);
  contentsToDelete.forEach((item) => {
    const itemPath = path.join(hostingAssetRepoDir, item);
    fs.removeSync(itemPath);
  });
}

function main() {
  const { stage, version } = argv;
  try {
    console.log(`Commencing script to commit ${stage} ${version} build.`);
    const { srcCodeRepoDir, hostingAssetRepoDir } = getRepoPaths({ stage });
    console.log('Validating repos...');
    validateRepos({ srcCodeRepoDir, hostingAssetRepoDir });
    console.log('Clearing destination repo...');
    clearDestRepo({ hostingAssetRepoDir });
    console.log('Copying build directory contents from source code repo to hosting assets repo...');
    fs.copySync(path.join(srcCodeRepoDir, 'build'), hostingAssetRepoDir);
    console.log('Logging deployment...');
    fs.appendFileSync(
      path.join(hostingAssetRepoDir, 'latest-deployment.txt'),
      `${moment().format()}\n`,
      'utf8',
    );
    console.log('Changing directory...');
    process.chdir(hostingAssetRepoDir);
    console.log('Staging changes in hosting assets repo...');
    execSync('git add .');
    console.log('Committing changes in hosting assets repo...');
    execSync(`git commit -m "v${version}"`);
    console.log('Pushing changes to hosting assets repo...');
    execSync('git push');
    console.log('Done');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
