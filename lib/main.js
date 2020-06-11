const _ = require('golgoth/lib/lodash');
const themeConfig = require('./themes');
const pluginConfig = require('./plugins');

const baseConfig = {
  // Pug does not allow the ":" character in shorthand classnames
  separator: '_',
  // Norska already purges the CSS, so we disable the builtin purge
  purge: false,
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'conditionals'],
    display: ['responsive', 'hover', 'focus', 'conditionals'],
    height: ['responsive', 'hover'],
    position: ['responsive', 'hover'],
    width: ['responsive', 'hover'],
    zIndex: ['responsive', 'hover'],
  },
};

// Merge the theme and plugin configs together with the base one
const fullConfig = _.merge({}, baseConfig, themeConfig, pluginConfig);

// At this point, the plugins are only plugin configuration objects, we need to
// call them
const rawPlugins = fullConfig.plugins;
fullConfig.plugins = [];
_.each(rawPlugins, plugin => {
  const { name, method } = plugin;
  const pluginVariants = _.get(fullConfig, `variants.${name}`, []);

  fullConfig.plugins.push(method(pluginVariants));
});

module.exports = fullConfig;
