const _ = require('golgoth/lib/lodash');
const colors = require('../themes/colors');

/**
 * Add colored bullets
 * @returns {Function} Plugin function
 **/
module.exports = function() {
  return function({ addUtilities }) {
    const newClasses = {
      '.bullet:before': { content: '"• "' },
      '.bullet-arrow:before': { content: '"> "' },
      '.bullet-cross:before': { content: '"✗ "' },
      '.bullet-tick:before': { content: '"✓ "' },
    };
    // Add numbered bullets
    _.times(10, index => {
      newClasses[`.bullet-${index + 1}:before`] = {
        content: `"${index + 1}. "`,
      };
    });
    // Colored bullets
    _.each(colors, (value, colorName) => {
      newClasses[`.bullet-${colorName}:before`] = {
        color: value,
      };
    });
    addUtilities(newClasses);
  };
};
