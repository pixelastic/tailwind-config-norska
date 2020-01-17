import { _ } from 'golgoth';

/**
 * Change the scaling of an element
 * @param {Array} variants Tailwind potential variants
 * @returns {Function} Plugin function
 **/
export default function(variants) {
  return function({ addUtilities }) {
    let newClasses = {};
    _.times(10, index => {
      const step = index + 1;
      const smallerName = `${step * 10}p`;
      const smallerRatio = step / 10;
      const biggerName = `${100 + step * 10}p`;
      const biggerRatio = 1 + step / 10;
      newClasses[`.scale-${smallerName}`] = {
        transform: `scale(${smallerRatio})`,
      };
      newClasses[`.scale-${biggerName}`] = {
        transform: `scale(${biggerRatio})`,
      };
    });

    addUtilities(newClasses, variants);
  };
}
