const animationPlugin = require('./plugins/animation');
const backgroundColor = require('./themes/backgroundColor');
const backgroundGradientPlugin = require('./plugins/backgroundGradient');
const backgroundOpacityPlugin = require('./plugins/backgroundOpacity');
const borderColor = require('./themes/borderColor');
const borderOpacityPlugin = require('./plugins/borderOpacity');
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
const transformPlugin = require('./plugins/transform');
const shorterClassesPlugin = require('./plugins/shorterClasses');
const spacing = require('./themes/spacing');
const switchPlugin = require('./plugins/switch');
const textColorPlugin = require('./plugins/textColor');
const textColor = require('./themes/textColor');
const textOpacityPlugin = require('./plugins/textOpacity');
const textShadowPlugin = require('./plugins/textShadow');
const transitionPlugin = require('./plugins/transition');
const zIndex = require('./themes/zIndex');

module.exports = {
  separator: '_',
  theme: {
    backgroundColor,
    borderColor,
    borderRadius,
    borderWidth: spacing,
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
    textColor,
    width: spacing,
    zIndex,
  },
  variants: {
    cursor: ['responsive', 'hover'],
    height: ['responsive', 'hover'],
    position: ['responsive', 'hover'],
    width: ['responsive', 'hover'],
    zIndex: ['responsive', 'hover'],
  },
  plugins: [
    animationPlugin(),
    backgroundGradientPlugin(),
    backgroundOpacityPlugin(['hover']),
    borderOpacityPlugin(),
    boxShadowPlugin(),
    bulletsPlugin(),
    debugPlugin(),
    dimensionCropPlugin(),
    flexboxPlugin(['responsive']),
    fontsPlugin(),
    grayscalePlugin(['hover']),
    lineHeightPlugin(),
    transformPlugin(),
    shorterClassesPlugin(['responsive', 'hover']),
    switchPlugin(),
    textColorPlugin(['hover']),
    textOpacityPlugin(['hover']),
    textShadowPlugin(),
    transitionPlugin(),
  ],
};
