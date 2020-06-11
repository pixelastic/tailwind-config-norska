const textShadow = require('./themes/textShadow.js');
const textShadowOpacity = require('./themes/textShadowOpacity.js');
const textShadowColor = require('./themes/textShadowColor.js');
const plugin = require('./plugin.js');
module.exports = {
  config: {
    themes: {
      textShadow,
      textShadowOpacity,
      textShadowColor,
    },
  },
  plugin: {
    name: 'textShadow',
    method: plugin,
  },
};
