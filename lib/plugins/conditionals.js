module.exports = function() {
  return function({ addVariant }) {
    addVariant('conditionals', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        const siblingSelector = `.if:checked ~ .then${separator}${className}`;
        const siblingChildrenSelector = `.if:checked ~ * .then${separator}${className}`;
        return `${siblingSelector}, ${siblingChildrenSelector}`;
      });
    });
  };
};
