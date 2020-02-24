const _ = require('golgoth/lib/lodash');
const colorsAsRGB = require('../helpers/colorsAsRGB');

/**
 * Allow using .text-shadow, .text-shadow-blue and .text-shadow-50p to adjust the text
 * shadow
 * @param {Array} variants Tailwind potential variants
 * @returns {Function} Plugin function
 **/
module.exports = function(variants) {
  return function({ addUtilities, theme }) {
    let newClasses = {
      '.text-shadow': {
        textShadow:
          '.03em .03em rgba(var(--text-shadow-rgb, 0, 0, 0), var(--text-shadow-opacity, .8))',
      },
    };
    const opacity = theme('opacity');
    newClasses = _.transform(
      opacity,
      (result, opacityValue, opacityName) => {
        result[`.text-shadow-${opacityName}`] = {
          '--text-shadow-opacity': opacityValue,
        };
      },
      newClasses
    );

    newClasses = _.transform(
      colorsAsRGB,
      (result, colorValues, colorName) => {
        const { red, green, blue } = colorValues;
        result[`.text-shadow-${colorName}`] = {
          '--text-shadow-rgb': `${red}, ${green}, ${blue}`,
        };
      },
      newClasses
    );

    addUtilities(newClasses, variants);
  };
};
