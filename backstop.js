const _ = require('golgoth/lib/lodash');
const fs = require('fs');
const path = require('path');

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

// Discover all files to test in docs/src
const filesInSrc = fs.readdirSync('docs/src');
const blocklistPugFiles = ['404', 'index'];
const pagesToTest = _.chain(filesInSrc)
  .reject(basename => {
    const extname = path.extname(basename);
    return extname !== '.pug';
  })
  .map(filename => {
    return path.basename(filename, '.pug');
  })
  .difference(blocklistPugFiles)
  .value();

const scenarios = _.map(pagesToTest, basename => {
  const url = `http://127.0.0.1:8083/${basename}/`;
  const label = _.startCase(basename);
  return {
    label,
    url,
    selectors: ['.screenshot'],
  };
});

module.exports = {
  ...defaultConfig,
  scenarios,
};
