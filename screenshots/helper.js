const _ = require('golgoth/lib/lodash');
const fs = require('fs');
const path = require('path');

module.exports = {
  /**
   * Discover all files to test in docs/src
   * @returns {Array} List of url folders
   */
  getPagesToTest() {
    const filesInSrc = fs.readdirSync('docs/src');
    const blocklistPugFiles = ['404', 'index'];
    return _.chain(filesInSrc)
      .reject((basename) => {
        const extname = path.extname(basename);
        return extname !== '.pug';
      })
      .map((filename) => {
        return path.basename(filename, '.pug');
      })
      .difference(blocklistPugFiles)
      .value();
  },

  /**
   * Returns the list of scenarions for the backstop config
   * @returns {Array} List of scenarios
   **/
  getScenarios() {
    const pagesToTest = this.getPagesToTest();
    return _.map(pagesToTest, (basename) => {
      const url = `http://127.0.0.1:8083/${basename}/`;
      const label = _.startCase(basename);
      return {
        label,
        url,
        selectors: ['.screenshot'],
      };
    });
  },
};
