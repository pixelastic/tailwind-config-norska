const _ = require('golgoth/lib/lodash');
const defaultConfig = require('tailwindcss/defaultConfig.js');
const rawBoxShadow = defaultConfig.theme.boxShadow;
const scaleRenaming = {
  none: '0',
  xs: '001',
  sm: '01',
  default: '1',
  md: '2',
  lg: '3',
  xl: '4',
  '2xl': '5',
};
const boxShadow = _.transform(rawBoxShadow, (result, rawValue, rawKey) => {
  const key = scaleRenaming[rawKey] || rawKey;
  const value = _.replace(
    rawValue,
    /rgba\(0, 0, 0,/g,
    'rgba(var(--box-shadow-rgb, 0, 0, 0),'
  );
  result[key] = value;
});
// Setting the default size as 1
boxShadow.default = boxShadow['1'];

module.exports = boxShadow;
