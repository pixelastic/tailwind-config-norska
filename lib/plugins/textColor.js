const _ = require('golgoth/lib/lodash');
const hexToRGB = require('../helpers/hexToRGB.js');

/**
 * Allow using .purple instead of .font-purple to color text
 * @param {Array} variants Tailwind potential variants
 * @returns {Function} Plugin function
 **/
module.exports = function(variants) {
  return function({ addUtilities, theme }) {
    const colors = theme('textColor');
    const newClasses = _.transform(
      colors,
      (result, colorValue, colorName) => {
        const rgb = hexToRGB(colorValue);

        // Keep value as-is if not rgb
        if (!rgb) {
          result[`.${colorName}`] = { color: colorValue };
          return;
        }

        // Convert to rgb so we can apply an opacity
        const { red, green, blue } = rgb;
        const rgbaColorValue = `rgba(${red}, ${green}, ${blue}, var(--text-opacity, 1))`;
        result[`.${colorName}`] = { color: rgbaColorValue };
      },
      {}
    );
    addUtilities(newClasses, variants);
  };
};
