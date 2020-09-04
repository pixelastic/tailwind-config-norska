const _ = require('golgoth/lib/lodash');
const helper = require('../visual-tests/helper.js');
const exit = require('firost/exit');
const consoleError = require('firost/consoleError');
(async function () {
  // Stop if server not running
  // Run doc server if not running
  const isServerRunning = await helper.isServerRunning();
  if (!isServerRunning) {
    consoleError(
      'Server is not running, please run yarn run server in another shell and try again'
    );
    exit(1);
  }

  // Parse arguments as filter for the tests
  const args = process.argv.slice(2);
  const options = {};
  if (!_.isEmpty(args)) {
    options.filter = args[0];
  }

  await helper.runTests(options);
})();
