const pulse = require('firost/lib/pulse');
module.exports = async (_page, scenario, _viewport) => {
  pulse.emit('tick', scenario.label);

  // Disabling the logs from the windows
  console.log = () => {};
};
