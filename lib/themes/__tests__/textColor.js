const module = require('../textColor');

describe('textColor', () => {
  it('should contain .black as RGB', () => {
    expect(module).toHaveProperty(
      'black',
      'rgba(0, 0, 0, var(--text-opacity, 1))'
    );
  });
  it('should contain .transparent', () => {
    expect(module).toHaveProperty('transparent', 'transparent');
  });
});
