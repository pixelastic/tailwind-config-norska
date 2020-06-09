const _ = require('golgoth/lib/lodash');
/**
 * Set a default speed, delay and function for any transition-* methods
 * @param {Array} variants Tailwind potential variants
 * @returns {Function} Plugin function
 **/
module.exports = function(variants) {
  return function({ addUtilities, theme }) {
    const transitionProperty = theme('transitionProperty');
    const timingFunction = theme('timingFunction');
    const timingScale = theme('timingScale');
    const defaultProperties = {
      '--transition-duration': timingScale.default,
      '--transition-delay': timingScale['0'],
      '--transition-timing-function': timingFunction.default,
      transitionDuration: 'var(--transition-duration)',
      transitionDelay: 'var(--transition-delay)',
      transitionTimingFunction: 'var(--transition-timing-function)',
    };
    const newClasses = _.transform(
      transitionProperty,
      (result, value, key) => {
        result[`.transition-${key}`] = {
          ...defaultProperties,
          transitionProperty: value,
        };
      },
      {}
    );

    // Add duration classes
    _.each(timingScale, (value, key) => {
      newClasses[`.duration-${key}`] = {
        '--transition-duration': value,
      };
    });

    // Add delay classes
    _.each(timingScale, (value, key) => {
      newClasses[`.delay-${key}`] = {
        '--transition-delay': value,
      };
    });

    // Add timing function classes
    _.each(timingFunction, (value, key) => {
      newClasses[`.ease-${key}`] = {
        '--transition-timing-function': value,
      };
    });

    addUtilities(newClasses, variants);
  };
};
