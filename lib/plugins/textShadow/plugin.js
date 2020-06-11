const generateClasses = require('../../helpers/generateClasses.js');
const rgbColors = require('../../helpers/rgbColors.js');

/**
 * Converts an RGB object into a string to be used in a rgb() context
 * @param {string} color Color object
 * @returns {string} String representation of the rgb
 */
function toStringRGB(color) {
  const { red, green, blue } = color;
  return `${red}, ${green}, ${blue}`;
}

/**
 * Adds .text-shadow that can be controlled with .text-shadow-{color} and
 * .text-shadow-opacity-{value}
 * @param {Array} variants Tailwind potential variants
 * @returns {Function} Plugin function
 **/
module.exports = function(variants) {
  return function({ addUtilities, theme }) {
    const textShadowColor = theme('textShadowColor');
    const textShadowOpacity = theme('textShadowOpacity');
    const textShadow = theme('textShadow');
    const validColors = rgbColors(textShadowColor);

    const baseClasses = generateClasses(textShadow, '.text-shadow-', value => {
      return {
        '--text-shadow-rgb': toStringRGB(validColors.default),
        '--text-shadow-opacity': textShadowOpacity.default,
        textShadow: value,
      };
    });

    const colorClasses = generateClasses(
      textShadowColor,
      '.text-shadow-',
      value => {
        return {
          '--text-shadow-rgb': toStringRGB(value),
        };
      }
    );

    const opacityClasses = generateClasses(
      textShadowOpacity,
      '.text-shadow-opacity-',
      '--text-shadow-opacity'
    );

    const allClasses = {
      ...baseClasses,
      ...colorClasses,
      ...opacityClasses,
    };

    addUtilities(allClasses, variants);
  };
};
