/* eslint-disable import/no-commonjs */
import animationPlugin from './plugins/animation';
import backgroundColor from './themes/backgroundColor';
import backgroundGradientPlugin from './plugins/backgroundGradient';
import backgroundOpacityPlugin from './plugins/backgroundOpacity';
import borderColor from './themes/borderColor';
import borderOpacityPlugin from './plugins/borderOpacity';
import borderRadius from './themes/borderRadius';
import boxShadowPlugin from './plugins/boxShadow';
import bulletsPlugin from './plugins/bullets';
import colors from './themes/colors';
import debugPlugin from './plugins/debug';
import dimensionCropPlugin from './plugins/dimensionCrop';
import flexboxPlugin from './plugins/flexbox';
import fontsPlugin from './plugins/fonts';
import fontSize from './themes/fontSize';
import grayscalePlugin from './plugins/grayscale';
import inset from './themes/inset';
import lineHeightPlugin from './plugins/lineHeight';
import lineHeight from './themes/lineHeight';
import opacity from './themes/opacity';
import transformPlugin from './plugins/transform';
import shorterClassesPlugin from './plugins/shorterClasses';
import spacing from './themes/spacing';
import switchPlugin from './plugins/switch';
import textColorPlugin from './plugins/textColor';
import textColor from './themes/textColor';
import textOpacityPlugin from './plugins/textOpacity';
import textShadowPlugin from './plugins/textShadow';
import transitionPlugin from './plugins/transition';
import zIndex from './themes/zIndex';

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
