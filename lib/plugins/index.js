const _ = require('golgoth/lib/lodash');
const animationAndTransition = require('./animationAndTransition');
const boxShadow = require('./boxShadow');
const bullets = require('./bullets');
const conditionals = require('./conditionals');
const debug = require('./debug');
const dimensionCrop = require('./dimensionCrop');
const flexbox = require('./flexbox');
const fontFamily = require('./fontFamily');
const fontWeight = require('./fontWeight');
const gradient = require('./gradient');
const grayscale = require('./grayscale');
const lineHeight = require('./lineHeight');
const misc = require('./misc');
const textColor = require('./textColor');
const textDecoration = require('./textDecoration');
const textShadow = require('./textShadow');

const pluginList = [
  animationAndTransition,
  boxShadow,
  bullets,
  conditionals,
  debug,
  dimensionCrop,
  flexbox,
  fontFamily,
  fontWeight,
  gradient,
  grayscale,
  lineHeight,
  misc,
  textColor,
  textDecoration,
  textShadow,
];

// Merge all plugin configuration together
let aggregatedConfig = { plugins: [] };
_.each(pluginList, pluginConfig => {
  _.merge(aggregatedConfig, pluginConfig.config);
  aggregatedConfig.plugins.push(pluginConfig.plugin);
});

module.exports = aggregatedConfig;
