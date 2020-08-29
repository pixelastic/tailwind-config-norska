const read = require('firost/read');
module.exports = async function () {
  return await read('../../README.md');
};
