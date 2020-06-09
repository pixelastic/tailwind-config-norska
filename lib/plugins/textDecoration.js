const _ = require('golgoth/lib/lodash');
const textDecoration = require('../themes/textDecoration');

module.exports = function(variants) {
  return function({ addUtilities }) {
    const newClasses = _.transform(
      textDecoration,
      (result, value, key) => {
        result[`.${key}`] = {
          textDecoration: value,
        };
      },
      {}
    );
    addUtilities(newClasses, variants);
  };
};
