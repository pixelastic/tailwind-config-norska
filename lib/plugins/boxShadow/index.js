const boxShadow = require('./themes/boxShadow.js');
const boxShadowColor = require('./themes/boxShadowColor.js');
const plugin = require('./plugin.js');
module.exports = {
  config: {
    themes: {
      boxShadow,
      boxShadowColor,
    },
  },
  plugin: {
    name: 'boxShadow',
    method: plugin,
  },
};
