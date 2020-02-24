const colors = require('../themes/colors');
const _ = require('golgoth/lib/lodash');
const hexToRGB = require('hex-rgb');

const rgbColors = _.transform(
  colors,
  (result, colorValue, colorName) => {
    if (!_.startsWith(colorValue, '#')) {
      result[colorName] = { raw: colorValue };
      return;
    }
    const { red, green, blue } = hexToRGB(colorValue);
    result[colorName] = { red, green, blue };
  },
  {}
);

module.exports = rgbColors;
