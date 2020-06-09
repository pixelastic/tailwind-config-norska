const _ = require('golgoth/lib/lodash');

/**
 * Allow using .underline-purple to change the color of the underline
 * @param {Array} variants Tailwind potential variants
 * @returns {Function} Plugin function
 **/
module.exports = function(variants) {
  return function({ addUtilities, theme }) {
    const colors = theme('textColor');
    const newClasses = _.transform(
      colors,
      (result, colorValue, colorName) => {
        result[`.underline-${colorName}`] = {
          '--text-decoration-color': colorValue,
        };
      },
      {}
    );
    addUtilities(newClasses, variants);
  };
};
