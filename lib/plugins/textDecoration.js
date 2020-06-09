const _ = require('golgoth/lib/lodash');
const textDecoration = require('../themes/textDecoration');

module.exports = function(variants) {
  return function({ addUtilities }) {
    const newClasses = _.transform(
      textDecoration,
      (result, value, key) => {
        const valueWithColor = `${value} var(--text-decoration-color, currentColor)`;
        result[`.${key}`] = { textDecoration: valueWithColor };
      },
      {}
    );
    addUtilities(newClasses, variants);
  };
};
