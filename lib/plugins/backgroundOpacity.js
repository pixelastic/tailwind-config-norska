const _ = require('golgoth/lib/lodash');

/**
 * Allow using .bg-opacity-75p to change the background opacity
 * To do so, we need to use rgba for colors and use a variable for the alpha
 * channel
 * @param {Array} variants Tailwind potential variants
 * @returns {Function} Plugin function
 **/
module.exports = function(variants) {
  return function({ addUtilities, theme }) {
    const opacities = theme('opacity');
    const newClasses = _.transform(
      opacities,
      (result, opacityValue, opacityName) => {
        // We change the --background-opacity on the element
        // ...but it will also change on the children, so we overwrite the
        // values on children using > *
        // And we add a [class] on the main one to make sure a custom opacity
        // is always more specific than an overwritten one
        const className = `.bg-opacity-${opacityName}[class]`;
        result[className] = {
          '--background-opacity': opacityValue,
        };
        result[`${className} > *`] = {
          '--background-opacity': '1',
        };
      },
      {}
    );

    addUtilities(newClasses, variants);
  };
};
