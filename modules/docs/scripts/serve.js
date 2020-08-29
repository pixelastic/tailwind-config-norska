const watch = require('firost/watch');
const run = require('firost/run');
const path = require('path');
const norska = require('norska');

(async function () {
  const libraryPath = path.resolve('../lib');
  const libraryFiles = [
    `${libraryPath}/lib/main.js`,
    `${libraryPath}/lib/**/*.js`,
  ];
  const tailwindConfig = path.resolve('tailwind.config.js');
  const cssFile = path.resolve('dist/style.css');
  const tailwindData = path.resolve('src/_data/tailwind.js');

  // Update ./tailwind.config.js whenever a source file is modified
  // This will in turn regenerate the documentation CSS file
  watch(libraryFiles, async () => {
    console.info('Live reload 1/2');
    await run(`touch ${tailwindConfig}`);
  });

  // Update ./_src/data/tailwind.js whenever the CSS of the documentation
  // is updated. This will in turn force the live-reload of the page
  watch(cssFile, async () => {
    console.info('Live reload 2/2');
    await run(`touch ${tailwindData}`);
  });

  await norska.initConfig();
  await norska.serve();
})();
