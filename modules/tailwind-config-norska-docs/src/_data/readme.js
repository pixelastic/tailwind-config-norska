const read = require('firost/lib/read');
module.exports = async function () {
  return await read('../../README.md');
};
