const _ = require('golgoth/lib/lodash');

/**
 * Add numeric scale to line-height
 * @returns {Function} Plugin function
 **/
module.exports = function() {
  return function({ addUtilities, theme }) {
    const values = theme('lineHeight');
    const newClasses = _.transform(
      values,
      (result, value, key) => {
        result[`.lh-${key}`] = {
          lineHeight: value,
        };
      },
      {}
    );
    addUtilities(newClasses);
  };
};
