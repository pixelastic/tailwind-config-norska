const _ = require('golgoth/lib/lodash');

/**
 * Allow using .bg-opacity-75p to change the background opacity
 * To do so, we need to use rgba for colors and use a variable for the alpha
 * channel
 * @param {Array} variants Tailwind potential variants
 * @returns {Function} Plugin function
 **/
module.exports = function(variants) {
  return function({ addUtilities, addBase, theme }) {
    const opacities = theme('opacity');
    const newClasses = _.transform(
      opacities,
      (result, opacityValue, opacityName) => {
        // We change the --background-opacity on the element
        const className = `.bg-opacity-${opacityName}`;
        result[className] = {
          '--background-opacity': opacityValue,
        };
      },
      {}
    );

    addUtilities(newClasses, variants);

    // We overwrite the opacity for all other elements
    addBase({
      ':not([class*=bg-opacity])': { '--background-opacity': '1' },
    });
  };
};
