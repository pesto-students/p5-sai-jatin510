const mathOperations = require('./mathOperations');

describe('To test the math functions', () => {
  test('mathOperations is an object containing three functions: sum, diff and product', () => {
    expect(mathOperations).toEqual(
      expect.objectContaining({
        sum: expect.any(Function),
        diff: expect.any(Function),
        product: expect.any(Function),
      })
    );
  });

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
