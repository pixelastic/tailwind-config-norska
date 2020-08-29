const _ = require('golgoth/lib/lodash');
const path = require('path');
const norskaConfig = require('../modules/docs/norska.config.js');
const defaultConfig = require('./config.js');
const isPortReachable = require('is-port-reachable');
const read = require('firost/read');
const glob = require('firost/glob');
const writeJson = require('firost/writeJson');
const pMap = require('golgoth/lib/pMap');
const exist = require('firost/exist');
const cheerio = require('cheerio');
const pulse = require('firost/pulse');
const spinner = require('firost/spinner');
const backstopjs = require('backstopjs');
const exit = require('firost/exit');

module.exports = {
  screenshotSelector: '.screenshot',
  /**
   * Returns the port on which the docs are running
   * @returns {number} Port number
   **/
  serverPort() {
    return _.get(norskaConfig, 'port', 8083);
  },
  /**
   * Check if the server is currently running
   * @param {number} timeout Default timeout to wait
   * @returns {boolean} True if the server is running
   **/
  async isServerRunning(timeout = 1000) {
    return await isPortReachable(this.serverPort(), { timeout });
  },
  /**
   * Check if a given html page as a .screenshot selector
   * @param {string} filepath Path to the HTML page
   * @returns {boolean} True if such a selector
   **/
  async hasScreenshot(filepath) {
    if (!(await exist(filepath))) {
      return false;
    }
    const content = await read(filepath);
    const $ = cheerio.load(content);
    return !!$(this.screenshotSelector).length;
  },
  /**
   * Returns the list of scenariors
   * @returns {Array} List of scenarios to test
   **/
  async getScenarios() {
    const files = await glob('modules/docs/src/*.pug');
    const filteredList = await pMap(files, async (srcPath) => {
      const basename = path.basename(srcPath, '.pug');
      const sharedPath = path.dirname(path.dirname(srcPath));
      const distPath = path.resolve(sharedPath, 'dist', basename, 'index.html');

      const hasScreenshot = await this.hasScreenshot(distPath);
      if (!hasScreenshot) {
        return false;
      }
      return path.basename(path.dirname(distPath));
    });

    const serverPort = this.serverPort();
    const baseUrl = `http://127.0.0.1:${serverPort}`;
    const scenarios = _.chain(filteredList)
      .compact()
      .map((pageSlug) => {
        const url = `${baseUrl}/${pageSlug}/`;
        return {
          label: pageSlug,
          url,
          selectors: [this.screenshotSelector],
        };
      })
      .value();
    return scenarios;
  },
  /**
   * Write the backstop.js config file with the list of scenarios
   * @returns {object} Config
   **/
  async getConfig() {
    const scenarios = await this.getScenarios();
    return {
      ...defaultConfig,
      scenarios,
    };
  },
  /**
   * Write the config and run the tests
   * @param {object} options Optional options to pass to the backstopjs call
   */
  async runTests(options) {
    // Write config so "yarn run test:visual:approve" works
    const config = await this.getConfig();
    const configPath = path.resolve('./backstop.json');
    await writeJson(config, configPath);

    // Override the default console.log to grab the number of scenarios
    let progress = { tick() {}, success() {} };
    console.log = (input) => {
      const regexp = /(.*) Selected (?<currentMax>[0-9]*) of (?<totalMax>[0-9]*) scenarios./;
      const matches = input.match(regexp);
      if (!matches) {
        return;
      }
      progress = spinner(_.toInteger(matches.groups.currentMax));
    };

    // Update progress on each onBefore call
    pulse.on('tick', (input) => {
      progress.tick(input);
    });

    // Run the tests
    process.setMaxListeners(Infinity);
    try {
      await backstopjs('test', {
        config,
        ...options,
      });
    } catch (err) {
      progress.failure('Some tests are failing');
      exit(1);
    }
    progress.success('All tests are passing');
  },
};
