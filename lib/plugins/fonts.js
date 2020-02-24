/**
 * Add most common font families with .verdana, .arial, .helvetica
 * @param {Array} variants Tailwind potential variants
 * @returns {Function} Plugin function
 **/
module.exports = function(variants) {
  return function({ addUtilities }) {
    let newClasses = {
      '.arial': {
        fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
      },
      '.verdana': {
        fontFamily: 'Verdana,Geneva,sans-serif',
      },
      '.helvetica': {
        fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
      },
    };
    addUtilities(newClasses, variants);
  };
};
