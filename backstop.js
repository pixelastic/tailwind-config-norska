const helper = require('./screenshots/helper.js');

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

const scenarios = helper.getScenarios();

module.exports = {
  ...defaultConfig,
  scenarios,
};
