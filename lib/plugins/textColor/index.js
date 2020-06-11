const theme = require('./theme.js');
const plugin = require('./plugin.js');
module.exports = {
  config: {
    theme: {
      textColor: theme,
    },
    corePlugins: {
      textColor: false,
    },
  },
  plugin: {
    name: 'textColor',
    method: plugin,
  },
};
