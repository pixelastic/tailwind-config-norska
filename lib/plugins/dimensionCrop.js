import { _ } from 'golgoth';

/**
 * Allow using .w-base-* (.h-base-*) and .w-crop-x (.h-crop-*) to compute dynamic dimensions
 * @param {Array} variants Tailwind potential variants
 * @returns {Function} Plugin function
 **/
export default function(variants) {
  return function({ addUtilities, theme }) {
    const spacing = theme('spacing');
    const newClasses = _.transform(
      spacing,
      (result, spaceValue, spaceName) => {
        result[`.w-base-${spaceName}`] = {
          width: `calc(${spaceValue} - var(--width-crop, 0))`,
        };
        result[`.w-crop-${spaceName}`] = {
          '--width-crop': spaceValue,
        };
        result[`.h-base-${spaceName}`] = {
          height: `calc(${spaceValue} - var(--height-crop, 0))`,
        };
        result[`.h-crop-${spaceName}`] = {
          '--height-crop': spaceValue,
        };
      },
      {}
    );

    addUtilities(newClasses, variants);
  };
}
