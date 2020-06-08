module.exports = async (page, scenario, vp) => {
  console.info("onReady");
  console.log('SCENARIO > ' + scenario.label);
  await require('./clickAndHoverHelper')(page, scenario);

  // add more ready handlers here...
};
