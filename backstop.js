const _ = require('golgoth/lib/lodash');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const defaultConfig = {
  id: 'tailwind-config-norska',
  viewports: [
    {
      label: 'desktop',
      width: 1600,
      height: 900,
    },
  ],
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  paths: {
    bitmaps_reference: 'screenshots/bitmaps_reference',
    bitmaps_test: 'screenshots/bitmaps_test',
    engine_scripts: 'screenshots/engine_scripts',
    html_report: 'screenshots/html_report',
    ci_report: 'screenshots/ci_report',
  },
  report: ['browser'],
  engine: 'puppeteer',
  engineOptions: {
    args: ['--no-sandbox'],
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
};

/**
 * Discover all files to test in docs/src
 * @returns {Array} List of url folders
 */
function getPagesToTest() {
  const filesInSrc = fs.readdirSync('docs/src');
  const blocklistPugFiles = ['404', 'index'];
  return _.chain(filesInSrc)
    .reject(basename => {
      const extname = path.extname(basename);
      return extname !== '.pug';
    })
    .map(filename => {
      return path.basename(filename, '.pug');
    })
    .difference(blocklistPugFiles)
    .value();
}

/**
 * Returns a list of unique selectors for each hoverable element
 * @param {string} basename Basename of the HTML file
 * @returns {Array} List of selectors
 **/
function hasHoverSelector(basename) {
  const filepath = path.resolve(`docs/dist/${basename}/index.html`);
  const raw = fs.readFileSync(filepath);
  const $ = cheerio.load(raw);
  return $('.screenshot-hover').length > 0;
}

const pagesToTest = getPagesToTest();
const scenarios = _.map(pagesToTest, basename => {
  const url = `http://127.0.0.1:8083/${basename}/`;
  const label = _.startCase(basename);
  const hoverSelectors = hasHoverSelector(basename)
    ? ['.screenshot-hover']
    : null;
  return {
    label,
    url,
    selectors: ['.screenshot'],
    hoverSelectors,
  };
});

module.exports = {
  ...defaultConfig,
  scenarios,
};
