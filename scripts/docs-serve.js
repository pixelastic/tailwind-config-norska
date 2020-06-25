const watch = require('firost/lib/watch');
const run = require('firost/lib/run');
const path = require('path');
const norska = require('norska');

(async function () {
  const libraryFiles = ['lib/main.js', 'lib/**/*.js'];
  const tailwindConfig = path.resolve('docs/tailwind.config.js');
  const cssFile = path.resolve('docs/dist/style.css');
  const tailwindData = path.resolve('docs/src/_data/tailwind.js');

  // Update ./docs/tailwind.config.js whenever a source file is modified
  // This will in turn regenerate the documentation CSS file
  watch(libraryFiles, async () => {
    console.info('Live reload 1/2');
    await run(`touch ${tailwindConfig}`);
  });

  // Update ./docs/_src/data/tailwind.js whenever the CSS of the documentation
  // is updated. This will in turn force the live-reload of the page
  watch(cssFile, async () => {
    console.info('Live reload 2/2');
    await run(`touch ${tailwindData}`);
  });

  await norska.initConfig({ root: './docs' });
  await norska.serve();
})();
