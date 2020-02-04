import { _ } from 'golgoth';

/**
 * Allow using .gradient-from and .gradient-to with .gradient-x and .gradient-y
 * to generate gradients
 * @param {Array} variants Tailwind potential variants
 * @returns {Function} Plugin function
 **/
export default function(variants) {
  return function({ addUtilities, theme }) {
    const colors = theme('colors');
    let newClasses = {
      '.bg-gradient-x': {
        backgroundImage:
          'linear-gradient(90deg, var(--gradient-from, transparent), var(--gradient-to, transparent))',
      },
      '.bg-gradient-y': {
        backgroundImage:
          'linear-gradient(180deg, var(--gradient-from, transparent), var(--gradient-to, transparent))',
      },
    };
    newClasses = _.transform(
      colors,
      (result, colorValue, colorName) => {
        result[`.bg-gradient-from-${colorName}`] = {
          '--gradient-from': colorValue,
          '--gradient-to': 'transparent', // this should turn `rgb(x,x,x)` into `rgba(x,x,x,0)`, but idk what to assume about the colors
        };
        result[`.bg-gradient-to-${colorName}`] = {
          '--gradient-to': colorValue,
          '--gradient-from': 'transparent', // this should turn `rgb(x,x,x)` into `rgba(x,x,x,0)`, but idk what to assume about the colors
        };
      },
      newClasses
    );

    addUtilities(newClasses, variants);
  };
}
