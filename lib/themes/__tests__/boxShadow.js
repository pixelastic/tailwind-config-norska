const module = require('../boxShadow');

describe('boxShadow', () => {
  it.each([
    // new scale | old scale
    ['0', 'none'],
    ['001', 'xs'],
    ['01', 'sm'],
    ['2', 'md'],
    ['3', 'lg'],
    ['4', 'xl'],
    ['5', '2xl'],
  ])('should have shadow-%s and not shadow-%s', async (yep, nope) => {
    expect(module).not.toHaveProperty(nope);
    expect(module).toHaveProperty(yep);
  });
});
