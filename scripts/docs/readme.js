const firost = require('firost');
const _ = require('golgoth/lib/lodash');
const config = require('../../lib/');

(async function () {
  const themeLines = [];
  const themeKeys = _.chain(config.theme).keys().sort().value();
  _.each(themeKeys, (themeName) => {
    const themeValues = config.theme[themeName];
    if (_.isFunction(themeValues) || _.isEmpty(themeValues)) {
      return;
    }
    themeLines.push(`### \`${themeName}\``);
    themeLines.push('');
    themeLines.push('| Key | Value |');
    themeLines.push('| --- | ----- |');
    _.each(themeValues, (rawValue, key) => {
      const value = _.isObject(rawValue) ? JSON.stringify(rawValue) : rawValue;
      themeLines.push(`| ${key} | ${value} |`);
    });
    themeLines.push('');
  });

  const variantLines = [];
  variantLines.push('| Type | Variants |');
  variantLines.push('| --- | ----- |');
  _.each(config.variants, (variants, propertyName) => {
    variantLines.push(`| ${propertyName} | ${variants.join(', ')} |`);
  });

  const template = await firost.read('./README.template.md');
  const readme = _.chain(template)
    .replace('{{themes}}', themeLines.join('\n'))
    .replace('{{variants}}', variantLines.join('\n'))
    .value();
  await firost.write(readme, './README.md');
})();
