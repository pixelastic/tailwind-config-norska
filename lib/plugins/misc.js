const _ = require('golgoth/lib/lodash');
/**
 * Add any custom classes through the "misc" theme
 * @param {Array} variants Tailwind potential variants
 * @returns {Function} Plugin function
 **/
module.exports = function(variants) {
  return function({ addUtilities, theme }) {
    const misc = theme('misc');
    let newClasses = _.transform(
      misc,
      (result, value, key) => {
        result[`.${key}`] = value;
      },
      {}
    );
    addUtilities(newClasses, variants);
  };
};
