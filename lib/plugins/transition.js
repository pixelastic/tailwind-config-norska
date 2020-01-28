import { _ } from 'golgoth';
import timingScale from '../themes/timingScale';
import timingFunctions from '../themes/timingFunctions';

const properties = ['width', 'height', 'opacity'];

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
