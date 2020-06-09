const _ = require('golgoth/lib/lodash');

/**
 * Add most common font families with .verdana, .arial, .helvetica
 * @param {Array} variants Tailwind potential variants
 * @returns {Function} Plugin function
 **/
module.exports = function(variants) {
  return function({ addUtilities, theme }) {
    const fontFamilies = theme('fontFamily');
    const newClasses = _.transform(
      fontFamilies,
      (result, fontStackAsArray, fontName) => {
        const fontFamily = fontStackAsArray.join(',');
        result[`.${fontName}`] = {
          fontFamily,
        };
      },
      {}
    );
    addUtilities(newClasses, variants);
  };
};
