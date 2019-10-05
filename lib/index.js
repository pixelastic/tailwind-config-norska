/* eslint-disable import/no-commonjs */
import backgroundColor from './themes/backgroundColor';
import textColor from './themes/textColor';
import borderRadius from './themes/borderRadius';
import borderColor from './themes/borderColor';
import boxShadow from './themes/boxShadow';
import colors from './themes/colors';
import fontSize from './themes/fontSize';
import opacity from './themes/opacity';
import spacing from './themes/spacing';
import inset from './themes/inset';
import zIndex from './themes/zIndex';
import backgroundGradientPlugin from './plugins/backgroundGradient';
import backgroundOpacityPlugin from './plugins/backgroundOpacity';
import borderOpacityPlugin from './plugins/borderOpacity';
import bulletsPlugin from './plugins/bullets';
import debugPlugin from './plugins/debug';
import flexboxPlugin from './plugins/flexbox';
import grayscalePlugin from './plugins/grayscale';
import lineHeightPlugin from './plugins/lineHeight';
import shorterClassesPlugin from './plugins/shorterClasses';
import textColorPlugin from './plugins/textColor';
import textOpacityPlugin from './plugins/textOpacity';

module.exports = {
  separator: '_',
  theme: {
    backgroundColor,
    borderColor,
    borderRadius,
    boxShadow,
    colors,
    fontSize,
    height: spacing,
    maxHeight: spacing,
    maxWidth: spacing,
    minHeight: spacing,
    minWidth: spacing,
    borderWidth: spacing,
    inset,
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
    backgroundOpacityPlugin(['hover']),
    backgroundGradientPlugin(),
    borderOpacityPlugin(),
    bulletsPlugin(),
    debugPlugin(),
    flexboxPlugin(['responsive']),
    grayscalePlugin(['hover']),
    lineHeightPlugin(),
    shorterClassesPlugin(['responsive', 'hover']),
    textColorPlugin(['hover']),
    textOpacityPlugin(['hover']),
  ],
};
