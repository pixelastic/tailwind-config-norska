const _ = require('golgoth/lib/lodash');

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

const pagesToTest = [
  'backgrounds',
  'border-colors',
  'border-width',
  'border-radius',
  'font-sizes',
];
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
