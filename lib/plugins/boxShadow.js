import { _ } from 'golgoth';
import colorsAsRGB from '../helpers/colorsAsRGB';

/**
 * Adds shadows to elements. Allow controlling the size and colors
 * - .shadow-1, .shadow-01, .shadow-7  will change the size
 * - .shadow-blue, .shadow-red-9 will change the color
 * @param {Array} variants Tailwind potential variants
 * @returns {Function} Plugin function
 **/
export default function(variants) {
  return function({ addUtilities }) {
    let newClasses = {
      '.shadow-0': {
        boxShadow: 'none',
      },
      '.shadow-001': {
        boxShadow: '0 0 0 1px rgba(var(--box-shadow-rgb, 0, 0, 0), 0.05)',
      },
      '.shadow-01': {
        boxShadow: '0 1px 2px 0 rgba(var(--box-shadow-rgb, 0, 0, 0), 0.05)',
      },
      '.shadow-1': {
        boxShadow:
          '0 1px 3px 0 rgba(var(--box-shadow-rgb, 0, 0, 0), 0.1), 0 1px 2px 0 rgba(var(--box-shadow-rgb, 0, 0, 0), 0.06)',
      },
      '.shadow-2': {
        boxShadow:
          '0 4px 6px -1px rgba(var(--box-shadow-rgb, 0, 0, 0), 0.1), 0 2px 4px -1px rgba(var(--box-shadow-rgb, 0, 0, 0), 0.06)',
      },
      '.shadow-3': {
        boxShadow:
          '0 10px 15px -3px rgba(var(--box-shadow-rgb, 0, 0, 0), 0.1), 0 4px 6px -2px rgba(var(--box-shadow-rgb, 0, 0, 0), 0.05)',
      },
      '.shadow-4': {
        boxShadow:
          '0 20px 25px -5px rgba(var(--box-shadow-rgb, 0, 0, 0), 0.1), 0 10px 10px -5px rgba(var(--box-shadow-rgb, 0, 0, 0), 0.04)',
      },
      '.shadow-5': {
        boxShadow:
          '0 25px 50px -12px rgba(var(--box-shadow-rgb, 0, 0, 0), 0.25)',
      },
      '.shadow-inner': {
        boxShadow:
          'inset 0 2px 4px 0 rgba(var(--box-shadow-rgb, 0, 0, 0), 0.06)',
      },
    };

    newClasses = _.transform(
      colorsAsRGB,
      (result, colorValues, colorName) => {
        const { red, green, blue } = colorValues;
        result[`.shadow-${colorName}`] = {
          '--box-shadow-rgb': `${red}, ${green}, ${blue}`,
        };
      },
      newClasses
    );

    addUtilities(newClasses, variants);
  };
}
