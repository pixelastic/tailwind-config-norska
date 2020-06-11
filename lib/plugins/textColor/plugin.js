const rgbColors = require('../../helpers/rgbColors.js');
const generateClasses = require('../../helpers/generateClasses.js');

/**
 * Allow using .purple instead of .font-purple to color text
 * @param {Array} variants Tailwind potential variants
 * @returns {Function} Plugin function
 **/
module.exports = function(variants) {
  return function({ addUtilities, theme }) {
    const textColor = theme('textColor');
    const validColors = rgbColors(textColor);
    const textOpacity = theme('textOpacity');

    const baseClasses = generateClasses(validColors, '.', value => {
      const { red, green, blue } = value;
      const rgbaColorValue = `rgba(${red}, ${green}, ${blue}, var(--text-opacity))`;
      return {
        '--text-opacity': textOpacity.default,
        color: rgbaColorValue,
      };
    });

    const colorClasses = generateClasses(
      textOpacity,
      '.text-opacity-',
      '--text-opacity'
    );

    const allClasses = {
      ...baseClasses,
      ...colorClasses,
    };
    addUtilities(allClasses, variants);
  };
};
