import { _ } from 'golgoth';

/**
 * Add numeric scale to line-height
 * @returns {Function} Plugin function
 **/
export default function() {
  return function({ addUtilities, theme }) {
    const values = theme('lineHeight');
    const newClasses = _.transform(
      values,
      (result, value, key) => {
        result[`.lh-${key}`] = {
          lineHeight: value,
        };
      },
      {}
    );
    addUtilities(newClasses);
  };
}
