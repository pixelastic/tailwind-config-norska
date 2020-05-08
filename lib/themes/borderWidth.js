const spacing = require('./spacing');
const _ = require('golgoth/lib/lodash');

// Remove some values from the borders as they don't make sense (%, vh, vw,
// auto), etc)
const borderWidth = _.pickBy(spacing, (value, key) => {
  const isPercentage = _.endsWith(key, 'p');
  const isVh = _.endsWith(key, 'vh');
  const isVw = _.endsWith(key, 'vw');
  const isAuto = key === 'auto';
  return !isPercentage && !isVh && !isVw && !isAuto;
});

module.exports = borderWidth;
