const animationPlugin = require('./plugins/animation');
const backgroundGradientPlugin = require('./plugins/backgroundGradient');
const borderWidth = require('./themes/borderWidth');
const borderRadius = require('./themes/borderRadius');
const boxShadowPlugin = require('./plugins/boxShadow');
const bulletsPlugin = require('./plugins/bullets');
const colors = require('./themes/colors');
const debugPlugin = require('./plugins/debug');
const dimensionCropPlugin = require('./plugins/dimensionCrop');
const flexboxPlugin = require('./plugins/flexbox');
const fontsPlugin = require('./plugins/fonts');
const fontSize = require('./themes/fontSize');
const grayscalePlugin = require('./plugins/grayscale');
const inset = require('./themes/inset');
const lineHeightPlugin = require('./plugins/lineHeight');
const lineHeight = require('./themes/lineHeight');
const opacity = require('./themes/opacity');
const shorterClassesPlugin = require('./plugins/shorterClasses');
const spacing = require('./themes/spacing');
const switchPlugin = require('./plugins/switch');
const textColorPlugin = require('./plugins/textColor');
// const textColor = require('./themes/textColor');
const textShadowPlugin = require('./plugins/textShadow');
const transitionPlugin = require('./plugins/transition');
const zIndex = require('./themes/zIndex');

module.exports = {
  // Pug does not allow the ":" character in shorthand classnames
  separator: '_',
  // Norska already purges the CSS, so we disable the builtin purge
  purge: false,
  theme: {
    borderRadius,
    borderWidth,
    colors,
    fontSize,
    height: spacing,
    inset,
    lineHeight,
    maxHeight: spacing,
    maxWidth: spacing,
    minHeight: spacing,
    minWidth: spacing,
    opacity,
    spacing,
    width: spacing,
    zIndex,
  },
  variants: {
    height: ['responsive', 'hover'],
    position: ['responsive', 'hover'],
    width: ['responsive', 'hover'],
    zIndex: ['responsive', 'hover'],
  },
  plugins: [
    animationPlugin(),
    backgroundGradientPlugin(),
    boxShadowPlugin(),
    bulletsPlugin(),
    debugPlugin(),
    dimensionCropPlugin(),
    flexboxPlugin(['responsive']),
    fontsPlugin(),
    grayscalePlugin(['hover']),
    lineHeightPlugin(),
    shorterClassesPlugin(['responsive', 'hover']),
    switchPlugin(),
    textColorPlugin(['hover']),
    textShadowPlugin(),
    transitionPlugin(),
  ],
};
