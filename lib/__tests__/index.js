import module from '../index';

describe('module', () => {
  it('should do something', async () => {
    const input = 'foo';

    const actual = module.run(input);

    expect(actual).toEqual(true);
  });
});
