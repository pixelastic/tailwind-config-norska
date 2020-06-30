const pMap = require('golgoth/lib/pMap');
module.exports = async (page, _scenario, _viewport) => {
  // Click on all elements that have the .click class
  const elementsToClick = await page.$$('.screenshot-click');
  await pMap(elementsToClick, async (element) => {
    await element.click();
  });

  // Hover the element with the .hover class
  const elementToHover = await page.$('.screenshot-hover');
  if (elementToHover) {
    await elementToHover.hover();
  }
};
