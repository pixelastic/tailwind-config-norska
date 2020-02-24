const spacing = require('./spacing.js');
const _ = require('golgoth/lib/lodash');

// Use same scale as default spacing, but also add negative values
const scale = _.clone(spacing);
module.exports = _.transform(
  scale,
  (result, value, key) => {
    result[`-${key}`] = `-${value}`;
  },
  scale
);
