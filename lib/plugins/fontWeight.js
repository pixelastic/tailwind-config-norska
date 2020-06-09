/**
 * Add .bold and .no-bold
 * @param {Array} variants Tailwind potential variants
 * @returns {Function} Plugin function
 **/
module.exports = function(variants) {
  return function({ addUtilities }) {
    const newClasses = {
      '.bold': {
        fontWeight: 'bold',
      },
      '.no-bold': {
        fontWeight: 'normal',
      },
    };
    addUtilities(newClasses, variants);
  };
};
