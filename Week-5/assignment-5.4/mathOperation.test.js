const mathOperations = require('./mathOperations');

describe('To test the math functions', () => {
  test('sum operation', () => {
    expect(mathOperations.sum(10, 5)).toEqual(15);
  });
  test('difference operation', () => {
    expect(mathOperations.diff(15, 5)).toEqual(10);
  });
  test('product operation', () => {
    expect(mathOperations.product(10, 5)).toEqual(50);
  });
});
