const _ = require('golgoth/lib/lodash');
const hexToRGB = require('../helpers/hexToRGB');

/**
 * Allow changing the color of the shadows
 * @param {Array} variants Tailwind potential variants
 * @returns {Function} Plugin function
 **/
module.exports = function(variants) {
  return function({ addUtilities, theme }) {
    // Allow updating shadow color
    const colors = theme('colors');
    const newClasses = _.transform(colors, (result, colorValue, colorName) => {
      const rgb = hexToRGB(colorValue);
      if (!rgb) {
        return;
      }
      const { red, green, blue } = rgb;
      result[`.shadow-${colorName}`] = {
        '--box-shadow-rgb': `${red}, ${green}, ${blue}`,
      };
    });

    addUtilities(newClasses, variants);
  };
};
