const read = require('firost/read');
module.exports = async () => {
  return await read('../README.md');
};
