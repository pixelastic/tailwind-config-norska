// const animationPlugin = require('./plugins/animation');
const backgroundGradientPlugin = require('./plugins/backgroundGradient');
const borderRadius = require('./themes/borderRadius');
const borderWidth = require('./themes/borderWidth');
const boxShadowPlugin = require('./plugins/boxShadow');
const boxShadow = require('./themes/boxShadow');
const bulletsPlugin = require('./plugins/bullets');
const colors = require('./themes/colors');
const conditionalsPlugin = require('./plugins/conditionals');
const debugPlugin = require('./plugins/debug');
const dimensionCropPlugin = require('./plugins/dimensionCrop');
const flexboxPlugin = require('./plugins/flexbox');
const fontFamilyPlugin = require('./plugins/fontFamily');
const fontFamily = require('./themes/fontFamily');
const fontSize = require('./themes/fontSize');
const fontWeightPlugin = require('./plugins/fontWeight');
const grayscalePlugin = require('./plugins/grayscale');
const inset = require('./themes/inset');
const lineHeightPlugin = require('./plugins/lineHeight');
const lineHeight = require('./themes/lineHeight');
const misc = require('./themes/misc');
const miscPlugin = require('./plugins/misc');
const opacity = require('./themes/opacity');
const scale = require('./themes/scale');
const spacing = require('./themes/spacing');
const timingFunction = require('./themes/timingFunction');
const timingScale = require('./themes/timingScale');
const textColorPlugin = require('./plugins/textColor');
const textDecorationPlugin = require('./plugins/textDecoration');
const textDecoration = require('./themes/textDecoration');
// const textShadowPlugin = require('./plugins/textShadow');
const transitionProperty = require('./themes/transitionProperty');
const transitionsPlugin = require('./plugins/transitions');
const underlineColorPlugin = require('./plugins/underlineColor');
const zIndex = require('./themes/zIndex');
const defaultConfig = require('tailwindcss/defaultConfig.js');
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
    ...defaultConfig.theme,
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
    misc,
    opacity,
    scale,
    spacing,
    textDecoration,
    timingFunction,
    timingScale,
    transitionProperty,
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
    fontWeight: false, // Removes .font-bold, as we have .bold
    textColor: false, // Removes .text-blue, as we have .blue
    textDecoration: false, // Removes .line-through, as we have .strike
    transitionProperty: false, // Add default speed, delay and function to transitions
    transitionDuration: false, // Handled through CSS variables
    transitionDelay: false, // Handled through CSS variables
    transitionTimingFunction: false, // Handled through CSS variables
  },
  plugins: [
    // Animations
    transitionsPlugin(),
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
    fontWeightPlugin(['responsive', 'hover', 'focus']),
    lineHeightPlugin(),
    textDecorationPlugin(['hover']),
    // Misc
    miscPlugin(),

    // textShadowPlugin(),
    // animationPlugin(),
    // transitionPlugin(),
  ],
};
