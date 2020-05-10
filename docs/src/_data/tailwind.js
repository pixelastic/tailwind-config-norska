const config = require('../../../lib/main.js');
const _ = require('golgoth/lib/lodash');
const sortKeys = require('../../../lib/helpers/sortKeys.js');

module.exports = {
  getThemeKeys(item) {
    const keys = _.keys(_.get(config, `theme.${item}`));
    return sortKeys(keys);
  },
  getClasses(themeKey, prefix) {
    const keys = this.getThemeKeys(themeKey);
    return _.map(keys, key => `${prefix}-${key}`);
  },
};
