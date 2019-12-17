import { _ } from 'golgoth';

const timingScale = {
  0: '0s',
  '02': '.2s',
  '05': '.5s',
  1: '1s',
  2: '2s',
  5: '5s',
  10: '10s',
  12: '12s',
  30: '30s',
  45: '45s',
  60: '60s',
};
const properties = ['width', 'height', 'opacity'];
const timingFunctions = [
  'ease',
  'ease-in',
  'ease-in-out',
  'ease-out',
  'linear',
];

/**
 * Allow using
 *  - .transition
 *  - .transition-width / .transition-height
 *  - .transition-linear / .transition-ease-in / etc
 *  - .transition-1 / transition-delay-1 / etc
 * @param {Array} variants Tailwind potential variants
 * @returns {Function} Plugin function
 **/
export default function(variants) {
  return function({ addUtilities }) {
    const newClasses = {
      '.transition': {
        transitionDelay: 'var(--transition-delay, 0s)',
        transitionDuration: 'var(--transition-duration, .5s)',
        transitionProperty: "var(--transition-property, '')",
        transitionTimingFunction: 'var(--transition-timing-function, linear)',
      },
    };
    // Animatable properties
    _.each(properties, property => {
      newClasses[`.transition-${property}`] = {
        '--transition-property': property,
      };
    });
    // Timing functions
    _.each(timingFunctions, name => {
      newClasses[`.transition-${name}`] = {
        '--transition-timing-function': name,
      };
    });
    // Use the scale for delays and durations
    _.each(timingScale, (value, key) => {
      newClasses[`.transition-delay-${key}`] = { '--transition-delay': value };
      newClasses[`.transition-${key}`] = {
        '--transition-duration': value,
      };
    });

    addUtilities(newClasses, variants);
  };
}
