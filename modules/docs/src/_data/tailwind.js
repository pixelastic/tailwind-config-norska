const config = require('../../tailwind.config.js');
const _ = require('golgoth/lib/lodash');
const uuid = require('firost/lib/uuid');
const sortKeys = require('../../lib/sortKeys.js');

module.exports = {
  uuid() {
    return uuid();
  },
  getTheme(item) {
    const theme = _.get(config, `theme.${item}`);
    const sortedKeys = sortKeys(_.keys(theme));
    return _.map(sortedKeys, (key) => {
      const value = theme[key];
      return { key, value };
    });
  },
  getThemeKeys(item) {
    const keys = _.keys(_.get(config, `theme.${item}`));
    return sortKeys(keys);
  },
  getClasses(themeKey, prefix) {
    const keys = this.getThemeKeys(themeKey);
    return _.map(keys, (key) => `${prefix}-${key}`);
  },
};
