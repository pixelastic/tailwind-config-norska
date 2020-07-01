const _ = require('golgoth/lib/lodash');
const helper = require('../../visual-tests/helper.js');
(async function () {
  // Run doc server if not running
  const isServerRunning = await helper.isServerRunning();
  if (!isServerRunning) {
    await helper.startServer();
  }

  // Parse arguments as filter for the tests
  const args = process.argv.slice(2);
  const options = {};
  if (!_.isEmpty(args)) {
    options.filter = args[0];
  }

  await helper.runTests(options);
})();
