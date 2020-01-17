import path from 'path';
import firost from 'firost';
import { _ } from 'golgoth';

(async function() {
  const config = await firost.require(path.resolve('./lib/index.js'));

  const themeLines = [];
  _.each(config.theme, (themeValues, themeName) => {
    themeLines.push(`### \`${themeName}\``);
    themeLines.push('');
    themeLines.push('| Key | Value |');
    themeLines.push('| --- | ----- |');
    _.each(themeValues, (value, key) => {
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

  const template = await firost.read('./docs/README.template.md');
  const readme = _.chain(template)
    .replace('{{themes}}', themeLines.join('\n'))
    .replace('{{variants}}', variantLines.join('\n'))
    .value();
  await firost.write(readme, './README.md');
})();
