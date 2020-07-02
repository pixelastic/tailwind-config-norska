module.exports = {
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
    bitmaps_reference: 'visual-tests/bitmaps_reference',
    bitmaps_test: 'visual-tests/bitmaps_test',
    engine_scripts: 'visual-tests/engine_scripts',
    html_report: 'visual-tests/html_report',
    ci_report: 'visual-tests/ci_report',
  },
  report: ['browser'],
  engine: 'puppeteer',
  engineOptions: {
    args: ['--no-sandbox'],
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  misMatchThreshold: '0.05',
  debug: false,
  debugWindow: false,
};
