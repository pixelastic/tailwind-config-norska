const defaultConfig = require('tailwindcss/defaultConfig.js');
const defaultFontFamily = defaultConfig.theme.fontFamily;
module.exports = {
  ...defaultFontFamily,
  arial: ['Arial', '"Helvetica Neue"', 'Helvetica', 'sans-serif'],
  verdana: ['Verdana', 'Geneva', 'sans-serif'],
  helvetica: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
};
