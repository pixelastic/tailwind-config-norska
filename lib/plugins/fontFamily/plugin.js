const generateClasses = require('../../helpers/generateClasses.js');
/**
 * Allow setting font-family without the .font- prefix
 * .arial instead of .font-arial
 * @param {Array} variants Tailwind potential variants
 * @returns {Function} Plugin function
 **/
module.exports = function(variants) {
  return function({ addUtilities, theme }) {
    const newClasses = generateClasses(theme('fontFamily'), '', value => {
      const fontFamily = value.join(',');
      return {
        fontFamily,
      };
    });
    addUtilities(newClasses, variants);
  };
};
