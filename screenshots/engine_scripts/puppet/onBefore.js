const spinner = require('firost/lib/spinner');
const helper = require('../../../screenshots/helper.js');
const pagesToTest = helper.getPagesToTest();
const maxScenarios = pagesToTest.length;

const progress = spinner(maxScenarios);
module.exports = async (page, scenario, viewport) => {
  // We don't need cookies
  // await require('./loadCookies')(page, scenario);

  // We display a better progress bar
  const name = scenario.label;
  const dimensions = `[${viewport.width}x${viewport.height}]`;
  progress.tick(`${dimensions} ${name}`);

  if (scenario.sIndex + 1 === maxScenarios) {
    progress.success('All pages tested');
  }

  // Disabling the logs from the windows
  console.log = () => {};
};
