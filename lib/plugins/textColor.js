const _ = require('golgoth/lib/lodash');

/**
 * Allow using .purple instead of .font-purple to color text
 * @param {Array} variants Tailwind potential variants
 * @returns {Function} Plugin function
 **/
module.exports = function(variants) {
  return function({ addUtilities, theme }) {
    const colors = theme('textColor');
    console.info(colors);
    const newClasses = _.transform(
      colors,
      (result, colorValue, colorName) => {
        result[`.${colorName}`] = { color: colorValue };
      },
      {}
    );
    addUtilities(newClasses, variants);
  };
};
