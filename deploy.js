// A helper script for `npm run build`.
// isolated usage: `node ./scripts/deploy.js`

const fs = require('fs');
const archiver = require('archiver');
const path = require('path');
const { logger } = require('@strommen-byu/core');

const sourceDir = path.join(__dirname, '../build');
const outputPath = path.join(__dirname, 'output/build.zip');

const main = async () => {
  logger.info('Starting deploy script.');
  logger.info(`Zipping ${sourceDir} to ${outputPath}`);

  // Create a file to stream archive data to
  const writeStream = fs.createWriteStream(outputPath);
  const archive = archiver('zip', { zlib: { level: 9 } }); // Set compression level

  // Set up listeners
  writeStream.on('close', () => {
    logger.info(`${archive.pointer()} total bytes`);
    logger.info('Archiver has been finalized and the output file descriptor has closed.');
    logger.error('test error');
  });
  archive.on('error', (err) => { throw err; });

  // Finalize
  archive.pipe(writeStream);
  archive.directory(sourceDir, false);
  archive.finalize();
};

(async () => (main()))();
