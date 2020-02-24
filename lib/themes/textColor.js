const _ = require('golgoth/lib/lodash');
const colorsAsRGB = require('../helpers/colorsAsRGB');

module.exports = _.transform(
  colorsAsRGB,
  (result, colorValue, colorName) => {
    const rgbColorValue = colorValue.raw
      ? colorValue.raw
      : `rgba(${colorValue.red}, ${colorValue.green}, ${colorValue.blue}, var(--text-opacity, 1))`;
    result[colorName] = rgbColorValue;
  },
  {}
);
