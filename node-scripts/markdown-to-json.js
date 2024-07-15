const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const fs = require('fs');
const path = require('path');
const markdownIt = require('markdown-it');
const markdownAst = require('markdown-it-ast');

const argv = yargs(hideBin(process.argv))
  .usage('Parses a markdown file, and outputs a json designed to store static text content for react rendering.')
  .usage('Note that this script assumes the md file meets all markdownlint standards.')
  .example('node ./node-scripts/markdown-to-json.js --help', 'Display help.')
  .example('node ./node-scripts/markdown-to-json.js -i about-me.md -o about-me.json', 'Normal usage.')
  .option('outFileName', {
    alias: 'o',
    required: true,
    type: 'string',
    description: 'The name for the output json file (w/ extension).',
  })
  .option('inFileName', {
    alias: 'i',
    required: true,
    description: 'The name of the assets/text md file (w/ extension) to parse.',
  })
  .check(({ inFileName, outFileName }) => {
    if (!inFileName.length) {
      throw new Error(`Invalid inFileName: ${inFileName}. Cannot be empty.`);
    }

    if (!outFileName.length) {
      throw new Error(`Invalid outFileName: ${outFileName}. Cannot be empty.`);
    }

    console.log('Yargs check passed.');
    return true;
  })
  .alias('h', 'help') // boilerplate yargs
  .wrap(120)
  .parse();

async function getMdContents({ filePath }) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    console.error(err);
    throw new Error(`Issue reading file ${filePath}!`);
  }
}

function mdFileToAstTokens({ mdContent }) {
  const mdParser = markdownIt({
    html: false,
    breaks: false,
    typographer: true,
    linkify: true,
  });

  const tokens = mdParser.parse(mdContent, {});
  const astTokens = markdownAst.makeAST(tokens);
  return astTokens;
}

function tokensToReadableContent({ astTokens }) {
  return astTokens
    .filter((token) => token.nodeType === 'paragraph')
    .map((token) => {
      const rawContent = token.children[0].content;
      const readableContent = rawContent.replace(/\r?\n|\r/g, ' ');
      return readableContent;
    });
}

async function markdownFileToReadableContent({ filePath }) {
  const mdContent = await getMdContents({ filePath });
  const astTokens = mdFileToAstTokens({ mdContent });
  const readableContent = tokensToReadableContent({ astTokens });
  return readableContent;
}

async function main() {
  const { inFileName, outFileName } = argv;
  const inFilePath = path.join('./', 'assets/text', inFileName);
  const outFilePath = path.join('./', 'node-scripts/output', outFileName);

  const readableContent = await markdownFileToReadableContent({ filePath: inFilePath });

  fs.writeFileSync(outFilePath, JSON.stringify(readableContent), 'utf8');
}

(async () => (main()))();
