const config = require('../../../lib/main.js');
const _ = require('golgoth/lib/lodash');

module.exports = {
  getThemeKeys(item) {
    return _.chain(config)
      .get(`theme.${item}`)
      .keys()
      .sort()
      .value();
  },
  getClasses(themeKey, prefix) {
    const keys = this.getThemeKeys(themeKey);
    return _.map(keys, key => `${prefix}-${key}`);
  },
};
