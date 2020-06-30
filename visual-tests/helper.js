const _ = require('golgoth/lib/lodash');
const path = require('path');
const norskaConfig = require('../modules/tailwind-config-norska-docs/norska.config.js');
const defaultConfig = require('./config.js');
const isPortReachable = require('is-port-reachable');
const read = require('firost/lib/read');
const glob = require('firost/lib/glob');
const pMap = require('golgoth/lib/pMap');
const cheerio = require('cheerio');
const exec = require('child_process').exec;
const run = require('firost/lib/run');
const pulse = require('firost/lib/pulse');
const spinner = require('firost/lib/spinner');
const backstopjs = require('backstopjs');

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
   * Build the website, start the server and wait for it to be available
   **/
  async startServer() {
    await run('yarn run docs:build');
    exec('yarn run docs:serve &');
    await this.isServerRunning(10000);
  },
  /**
   * Check if a given html page as a .screenshot selector
   * @param {string} filepath Path to the HTML page
   * @returns {boolean} True if such a selector
   **/
  async hasScreenshot(filepath) {
    const content = await read(filepath);
    const $ = cheerio.load(content);
    return !!$(this.screenshotSelector).length;
  },
  /**
   * Returns the list of scenariors
   * @returns {Array} List of scenarios to test
   **/
  async getScenarios() {
    const files = await glob(
      'modules/tailwind-config-norska-docs/dist/**/*.html'
    );
    const filteredList = await pMap(files, async (filepath) => {
      const hasScreenshot = await this.hasScreenshot(filepath);
      if (!hasScreenshot) {
        return false;
      }
      return path.basename(path.dirname(filepath));
    });

    const serverPort = this.serverPort();
    const baseUrl = `http://127.0.0.1:${serverPort}`;
    const scenarios = _.chain(filteredList)
      .compact()
      .map((pageSlug) => {
        const url = `${baseUrl}/${pageSlug}/`;
        const label = _.startCase(pageSlug);
        return {
          label,
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
   **/
  async runTests() {
    const config = await this.getConfig();

    pulse.on('tick', (label) => {
      if (!this.__progress) {
        this.__progress = spinner();
      }
      this.__progress.tick(label);
    });
    await backstopjs('test', config);
    // TODO: This hangs forever in case of errors. Should find another way to
    // stop
    // Could check the max number of scenarios, but won't work if we filter
    this.__progress.success('finished');
  },
};
