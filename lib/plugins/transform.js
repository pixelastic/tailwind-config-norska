const _ = require('golgoth/lib/lodash');

/**
 * Rotate, Scale or Translate elements
 * @param {Array} variants Tailwind potential variants
 * @returns {Function} Plugin function
 **/
module.exports = function(variants) {
  return function({ addUtilities, theme }) {
    let newClasses = {
      // All classes starting with .rotate-, .scale- or .translate- use the same
      // basic instruction. Values of each transformation is then updated
      // through other classes
      '[class*=rotate-],[class*=scale-],[class*=translate-]': {
        transform:
          'translateX(var(--transform-translate-x, 0)) translateY(var(--transform-translate-y, 0)) rotate(var(--transform-rotate, 0deg)) scale(var(--transform-scale, 1))',
      },
      '.mirror': {
        transform: 'scaleX(-1)',
      },
    };

    // Scaling up and down by increments of 10
    _.times(10, index => {
      const step = index + 1;
      const smallerName = `${step * 10}p`;
      const smallerRatio = step / 10;
      const biggerName = `${100 + step * 10}p`;
      const biggerRatio = 1 + step / 10;
      newClasses[`.scale-${smallerName}`] = {
        '--transform-scale': `${smallerRatio}`,
      };
      newClasses[`.scale-${biggerName}`] = {
        '--transform-scale': `${biggerRatio}`,
      };
    });

    // Rotating by increments of 5°
    _.each(_.range(0, 360, 5), angle => {
      newClasses[`.rotate-${angle}`] = { '--transform-rotate': `${angle}deg` };
    });

    // Translating
    const spacing = theme('spacing');
    _.each(spacing, (value, key) => {
      newClasses[`.translate-x-${key}`] = { '--transform-translate-x': value };
      newClasses[`.translate-y-${key}`] = { '--transform-translate-y': value };
      newClasses[`.translate-${key}`] = {
        '--transform-translate-x': value,
        '--transform-translate-y': value,
      };
    });

    addUtilities(newClasses, variants);
  };
};
