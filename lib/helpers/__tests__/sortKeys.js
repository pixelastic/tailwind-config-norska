const module = require('../sortKeys');
const _ = require('golgoth/lib/lodash');

describe('sortKeys', () => {
  describe('should order two keys', () => {
    it.each([
      [['0', '1']],
      [['1', '2']],
      [['2', '10']],
      [['01', '02']],
      [['02', '010']],
      [['001', '002']],
      [['002', '0010']],
      [['001', '01']],
      [['01', '1']],
      [['0', '01']],
      [['100', '100p']],
      [['50p', '100p']],
      [['100p', '100vh']],
      [['100vh', '100vw']],
      [['green-1', 'green-2']],
      [['green-1', 'green-10']],
      [['green-0', 'green-1']],
      [['green', 'green-1']],
      [['auto', 'green']],
      [['0', 'auto']],
      [['100p', '10vh']],
      [['100p', '10vh']],
      [['100vw', 'auto']],
    ])('%s', async matrix => {
      const input = _.shuffle(matrix);
      const actual = module(input);
      expect(actual).toEqual(matrix);
    });
  });
  it('should order all keys', async () => {
    const expected = [
      '0',
      '001',
      '002',
      '0010',
      '01',
      '02',
      '010',
      '1',
      '2',
      '10',
      '1p',
      '2p',
      '10p',
      '100p',
      '1vw',
      '2vw',
      '10vw',
      '100vw',
      'auto',
      'green',
      'green-1',
      'green-2',
      'green-10',
    ];
    const input = _.shuffle(expected);
    const actual = module(input);
    expect(actual).toEqual(expected);
  });
});
