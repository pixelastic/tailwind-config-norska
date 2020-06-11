const generateClasses = require('../../helpers/generateClasses.js');
const rgbColors = require('../../helpers/rgbColors.js');

/**
 * Allow changing the color of a shadow with .box-shadow-red
 * @param {Array} variants Tailwind potential variants
 * @returns {Function} Plugin function
 **/
module.exports = function(variants) {
  return function({ addUtilities, theme }) {
    const boxShadowColor = theme('boxShadowColor');
    const validColors = rgbColors(boxShadowColor);

    const newClasses = generateClasses(validColors, '.shadow-', value => {
      const { red, green, blue } = value;
      return {
        '--box-shadow-rgb': `${red}, ${green}, ${blue}`,
      };
    });

    addUtilities(newClasses, variants);
  };
};
