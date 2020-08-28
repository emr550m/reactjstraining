const Math = require('../src/math');

describe('Math library tests', () => {

  var m = null;
  beforeEach(() => {
    m = new Math();
  });

  afterEach(() => {
    m = null;
  });

  test('Math.add , adds 1 + 2 to equal 3', () => {
    expect(m.Add(1, 2)).toBe(3);
  });
  test('Math.subtract , subtracts 3 - 2 to equal 1', () => {
    expect(m.Subtract(3, 2)).toBe(1);
  });
  test('Math.eval , returns true if 3 2 are given as parameter', () => {
    expect(m.Eval(3, 2)).toBe(true);
  });

});