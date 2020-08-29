// const firost = require('firost');
const pMap = require('golgoth/lib/pMap');
const _ = require('golgoth/lib/lodash');
const run = require('firost/run');
const glob = require('firost/glob');
const writeJson = require('firost/writeJson');
const readJson = require('firost/readJson');

// const pMap = require('golgoth/lib/pMap');

/**
 * Update knows dependencies into the root and all modules
 **/
const safelist = ['firost', 'golgoth'];

(async function () {
  // Allow specifying which dep to update
  const cliArgs = _.slice(process.argv, 2);
  const dependencies = _.isEmpty(cliArgs)
    ? safelist
    : _.intersection(safelist, cliArgs);

  // First update in the root
  const command = `yarn upgrade --latest --exact ${dependencies.join(' ')}`;
  console.info(command);
  await run(command, { shell: true, stderr: false, stdout: false });

  // Read the versions
  const rootPackage = await readJson('package.json');
  const allDeps = {
    ...rootPackage.dependencies,
    ...rootPackage.devDependencies,
  };
  const versions = _.pick(allDeps, safelist);

  // Update all module package.json
  const packages = await glob('./modules/*/package.json');
  await pMap(packages, async (filepath) => {
    console.info(`Updating ${filepath}`);
    const modulePackage = await readJson(filepath);
    _.each(versions, (version, moduleName) => {
      if (_.has(modulePackage, `dependencies.${moduleName}`)) {
        _.set(modulePackage, `dependencies.${moduleName}`, version);
      }
      if (_.has(modulePackage, `devDependencies.${moduleName}`)) {
        _.set(modulePackage, `devDependencies.${moduleName}`, version);
      }
    });
    await writeJson(modulePackage, filepath);
  });

  // Hoist all dependencies
  console.info('yarn install');
  await run('yarn install', { stderr: false, stdout: false });
})();
