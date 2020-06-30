const helper = require('../../visual-tests/helper.js');
(async function () {
  // Run doc server if not running
  const isServerRunning = await helper.isServerRunning();
  if (!isServerRunning) {
    await helper.startServer();
  }

  await helper.runTests();
})();
