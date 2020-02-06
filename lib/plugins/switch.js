import { _ } from 'golgoth';

/**
 * Allow changing some display of an element based on the state of a checkbox
 * This allow simulating button presses to hide/show menus for example.
 *
 * Example:
 *     label(for="switch-1") Click me
 *     input.switch-1(type="checkbox" id="switch-1")
 *     .hidden.switch-1_block Only shown when label is clicked
 *
 * Note that the checkbox and the element to update must be siblings, so it's
 * usually better to put the checkbox right before the element
 *
 * @param {Array} variants Tailwind potential variants
 * @returns {Function} Plugin function
 **/
export default function(variants) {
  const maxSwitches = 3;
  const displays = ['flex', 'hidden', 'block', 'inline', 'inline-block'];

  return function({ addUtilities }) {
    let newClasses = {};
    _.times(maxSwitches, index => {
      const prefix = `switch-${index + 1}`;
      // Do be added to the checkbox
      newClasses[`.${prefix}`] = {
        display: 'none',
      };

      newClasses = _.transform(
        displays,
        (result, display) => {
          // To be added to the element to update based on the check
          const siblingSelector = `.${prefix}:checked ~ .${prefix}_${display}`;
          const siblingChildrenSelector = `.${prefix}:checked ~ * .${prefix}_${display}`;
          result[`${siblingSelector},${siblingChildrenSelector}`] = {
            display,
          };
        },
        newClasses
      );
    });
    addUtilities(newClasses, variants);
  };
}
