// Default config
const defaultConfig = require('tailwindcss/defaultConfig.js');
const defaultTheme = defaultConfig.theme;

// Fallback configs
const colors = require('./shared/colors.js');
const spacing = require('./shared/spacing.js');

// Specific configs
const borderRadius = require('./borderRadius.js');
const borderWidth = require('./borderWidth.js');
const fontSize = require('./fontSize.js');
const inset = require('./inset.js');
const maxHeight = require('./maxHeight.js');
const maxWidth = require('./maxWidth.js');
const minHeight = require('./minHeight.js');
const minWidth = require('./minWidth.js');
const opacity = require('./opacity.js');
const scale = require('./scale.js');
const zIndex = require('./zIndex.js');

module.exports = {
  theme: {
    ...defaultTheme,
    borderRadius,
    borderWidth,
    colors,
    fontSize,
    inset,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    opacity,
    scale,
    spacing,
    zIndex,
  },
};
