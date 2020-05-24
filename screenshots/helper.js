const _ = require('golgoth/lib/lodash');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

module.exports = {
  /**
   * Discover all files to test in docs/src
   * @returns {Array} List of url folders
   */
  getPagesToTest() {
    const filesInSrc = fs.readdirSync('docs/src');
    const blocklistPugFiles = ['404', 'index'];
    return _.chain(filesInSrc)
      .reject(basename => {
        const extname = path.extname(basename);
        return extname !== '.pug';
      })
      .map(filename => {
        return path.basename(filename, '.pug');
      })
      .difference(blocklistPugFiles)
      .value();
  },

  /**
   * Returns a list of unique selectors for each hoverable element
   * @param {string} basename Basename of the HTML file
   * @returns {Array} List of selectors
   **/
  hasHoverSelector(basename) {
    const filepath = path.resolve(`docs/dist/${basename}/index.html`);
    const raw = fs.readFileSync(filepath);
    const $ = cheerio.load(raw);
    return $('.screenshot-hover').length > 0;
  },
  /**
   * Returns the list of scenarions for the backstop config
   * It automatically adds the correct hoverSelectors key based on if we have
   * a .screenshot-hover class in the file to test
   * @returns {Array} List of scenarios
   **/
  getScenarios() {
    const pagesToTest = this.getPagesToTest();
    return _.map(pagesToTest, basename => {
      const url = `http://127.0.0.1:8083/${basename}/`;
      const label = _.startCase(basename);
      const hoverSelectors = this.hasHoverSelector(basename)
        ? ['.screenshot-hover']
        : null;
      return {
        label,
        url,
        selectors: ['.screenshot'],
        hoverSelectors,
      };
    });
  },
};
