const animationPlugin = require('./plugins/animation');
const backgroundGradientPlugin = require('./plugins/backgroundGradient');
const borderRadius = require('./themes/borderRadius');
const borderWidth = require('./themes/borderWidth');
const boxShadowPlugin = require('./plugins/boxShadow');
const boxShadow = require('./themes/boxShadow');
const bulletsPlugin = require('./plugins/bullets');
const colors = require('./themes/colors');
const debugPlugin = require('./plugins/debug');
const dimensionCropPlugin = require('./plugins/dimensionCrop');
const flexboxPlugin = require('./plugins/flexbox');
const fontSize = require('./themes/fontSize');
const fontFamily = require('./themes/fontFamily');
const fontFamilyPlugin = require('./plugins/fontFamily');
const grayscalePlugin = require('./plugins/grayscale');
const inset = require('./themes/inset');
const lineHeightPlugin = require('./plugins/lineHeight');
const lineHeight = require('./themes/lineHeight');
const opacity = require('./themes/opacity');
const shorterClassesPlugin = require('./plugins/shorterClasses');
const spacing = require('./themes/spacing');
const conditionalsPlugin = require('./plugins/conditionals');
const textDecoration = require('./themes/textDecoration');
const textDecorationPlugin = require('./plugins/textDecoration');
const textColorPlugin = require('./plugins/textColor');
const textShadowPlugin = require('./plugins/textShadow');
const transitionPlugin = require('./plugins/transition');
const underlineColorPlugin = require('./plugins/underlineColor');
const zIndex = require('./themes/zIndex');
// TOTEST:
// - Make sure ul, li default styles are still in the final file (norska)
// - Find an easy way to add a custom color palette, and have it used in all
// background/border/etc

module.exports = {
  // Pug does not allow the ":" character in shorthand classnames
  separator: '_',
  // Norska already purges the CSS, so we disable the builtin purge
  purge: false,
  theme: {
    borderRadius,
    borderWidth,
    boxShadow,
    colors,
    fontFamily,
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
    textDecoration,
    width: spacing,
    zIndex,
  },
  variants: {
    display: ['responsive', 'hover', 'focus', 'conditionals'],
    height: ['responsive', 'hover'],
    position: ['responsive', 'hover'],
    width: ['responsive', 'hover'],
    zIndex: ['responsive', 'hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'conditionals'],
  },
  corePlugins: {
    fontFamily: false, // Removes .font-sans, as we have .sans
    textColor: false, // Removes .text-blue, as we have .blue
    textDecoration: false, // Removes .line-through, as we have .strike
  },
  plugins: [
    // Colors
    backgroundGradientPlugin(),
    textColorPlugin(['hover']),
    underlineColorPlugin(['hover']),
    // Dimensions
    dimensionCropPlugin(),
    // Effects
    boxShadowPlugin(),
    grayscalePlugin(['hover']),
    // Helpers
    bulletsPlugin(),
    conditionalsPlugin(),
    debugPlugin(),
    flexboxPlugin(['responsive']),
    // Text
    fontFamilyPlugin(),
    lineHeightPlugin(),
    textDecorationPlugin(['hover']),
    // Misc
    animationPlugin(),

    shorterClassesPlugin(['responsive', 'hover']),
    textShadowPlugin(),
    transitionPlugin(),
  ],
};
