const theme = require('./theme.js');
const plugin = require('./plugin.js');
module.exports = {
  config: {
    theme: {
      flexbox: theme,
    },
    corePlugins: {
      // flexDirection: false,
      // flexWrap: false,
      // alignItems: false,
      // alignContent: false,
      // alignSelf: false,
      // justifyContent: false,
      // flex: false,
      // flexGrow: false,
      // flexShrink: false,
    },
  },
  plugin: {
    name: 'flexbox',
    method: plugin,
  },
};
