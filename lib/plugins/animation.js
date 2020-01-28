import { _ } from 'golgoth';
import timingScale from '../themes/timingScale';
import timingFunctions from '../themes/timingFunctions';

const fillModes = ['forward', 'backward'];
const playStates = ['paused', 'running'];

/**
 * Allow using
 *  - .animate
 *  - .animate-loop / .animate-once
 *  - .animate-linear / .animate-ease-out / etc
 *  - .animate-delay-1 / .-animate-delay-1
 *  - .animate-duration-1 / .-animate-duration-1
 *  - .animate-forward / .animate-backward
 *  - .animate-paused / .hover_animated-running / etc
 * @param {Array} variants Tailwind potential variants
 * @returns {Function} Plugin function
 **/
export default function(variants) {
  return function({ addUtilities }) {
    const newClasses = {
      '.animation': {
        animationName: "var(--animation-name, '')",
        animationTimingFunction: 'var(--animation-timing-function, linear)',
        animationPlayState: 'var(--animation-play-state, running)',
        animationFillMode: 'var(--animation-fill-mode, forwards)',
        animationDuration: 'var(--animation-duration, 3s)',
        animationDelay: 'var(--animation-delay, 0s)',
        animationIterationCount: 'var(--animation-iteration-count, infinite)',
      },
      '.animation-loop': {
        '--animation-iteration-count': 'infinite',
      },
      '.animation-once': {
        '--animation-iteration-count': '1',
      },
    };
    // Timing functions
    _.each(timingFunctions, name => {
      newClasses[`.animation-${name}`] = {
        '--animation-timing-function': name,
      };
    });
    // Direction
    _.each(fillModes, name => {
      newClasses[`.animation-${name}`] = {
        '--animation-fill-mode': name,
      };
    });
    // Play states
    _.each(playStates, name => {
      newClasses[`.animation-${name}`] = {
        '--animation-play-state': name,
      };
      newClasses[`.hover_animation-${name}:hover`] = {
        '--animation-play-state': name,
      };
    });
    // Delay and durations
    _.each(timingScale, (value, key) => {
      newClasses[`.animation-delay-${key}`] = { '--animation-delay': value };
      newClasses[`.-animation-delay-${key}`] = {
        '--animation-delay': `-${value}`,
      };
      newClasses[`.animation-duration-${key}`] = {
        '--animation-duration': value,
      };
      newClasses[`.-animation-duration-${key}`] = {
        '--animation-duration': `-${value}`,
      };
    });

    addUtilities(newClasses, variants);
  };
}
