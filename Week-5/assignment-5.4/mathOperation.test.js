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

  test('sum of invalid numbers should throw a TypeError', () => {
    expect(() => mathOperations.sum(undefined, undefined)).toThrow(TypeError);
    expect(() => mathOperations.sum(10, undefined)).toThrow(TypeError);
    expect(() => mathOperations.sum(null, undefined)).toThrow(TypeError);
    expect(() => mathOperations.sum(undefined, null)).toThrow(TypeError);
    expect(() => mathOperations.sum(undefined, null)).toThrow(TypeError);
    expect(() => mathOperations.sum(null, null)).toThrow(TypeError);
    expect(() => mathOperations.sum(null, 1)).toThrow(TypeError);
    expect(() => mathOperations.sum(1, null)).toThrow(TypeError);
    expect(() => mathOperations.sum(null, NaN)).toThrow(TypeError);
    expect(() => mathOperations.sum(NaN, null)).toThrow(TypeError);
    expect(() => mathOperations.sum(2, NaN)).toThrow(TypeError);
    expect(() => mathOperations.sum(NaN, 2)).toThrow(TypeError);
    expect(() => mathOperations.sum(1, '')).toThrow(TypeError);
    expect(() => mathOperations.sum(undefined, 'jatin')).toThrow(TypeError);
    expect(() => mathOperations.sum(2, '22')).toThrow(TypeError);
    expect(() => mathOperations.sum('jatin', undefined)).toThrow(TypeError);
  });

  test('sum operation', () => {
    expect(mathOperations.sum(10, 5)).toEqual(15);
  });

  test('diff of invalid numbers should throw a TypeError', () => {
    expect(() => mathOperations.diff(undefined, undefined)).toThrow(TypeError);
    expect(() => mathOperations.diff(10, undefined)).toThrow(TypeError);
    expect(() => mathOperations.diff(null, undefined)).toThrow(TypeError);
    expect(() => mathOperations.diff(undefined, null)).toThrow(TypeError);
    expect(() => mathOperations.diff(undefined, null)).toThrow(TypeError);
    expect(() => mathOperations.diff(null, null)).toThrow(TypeError);
    expect(() => mathOperations.diff(null, 1)).toThrow(TypeError);
    expect(() => mathOperations.diff(1, null)).toThrow(TypeError);
    expect(() => mathOperations.diff(null, NaN)).toThrow(TypeError);
    expect(() => mathOperations.diff(NaN, null)).toThrow(TypeError);
    expect(() => mathOperations.diff(2, NaN)).toThrow(TypeError);
    expect(() => mathOperations.diff(NaN, 2)).toThrow(TypeError);
    expect(() => mathOperations.diff(1, '')).toThrow(TypeError);
    expect(() => mathOperations.diff(undefined, 'jatin')).toThrow(TypeError);
    expect(() => mathOperations.diff(2, '22')).toThrow(TypeError);
    expect(() => mathOperations.diff('jatin', undefined)).toThrow(TypeError);
  });

  test('difference operation', () => {
    expect(mathOperations.diff(15, 5)).toEqual(10);
  });

  test('product of invalid numbers should throw a TypeError', () => {
    expect(() => mathOperations.product(undefined, undefined)).toThrow(
      TypeError
    );
    expect(() => mathOperations.product(10, undefined)).toThrow(TypeError);
    expect(() => mathOperations.product(null, undefined)).toThrow(TypeError);
    expect(() => mathOperations.product(undefined, null)).toThrow(TypeError);
    expect(() => mathOperations.product(undefined, null)).toThrow(TypeError);
    expect(() => mathOperations.product(null, null)).toThrow(TypeError);
    expect(() => mathOperations.product(null, 1)).toThrow(TypeError);
    expect(() => mathOperations.product(1, null)).toThrow(TypeError);
    expect(() => mathOperations.product(null, NaN)).toThrow(TypeError);
    expect(() => mathOperations.product(NaN, null)).toThrow(TypeError);
    expect(() => mathOperations.product(2, NaN)).toThrow(TypeError);
    expect(() => mathOperations.product(NaN, 2)).toThrow(TypeError);
    expect(() => mathOperations.product(1, '')).toThrow(TypeError);
    expect(() => mathOperations.product(undefined, 'jatin')).toThrow(TypeError);
    expect(() => mathOperations.product(2, '22')).toThrow(TypeError);
    expect(() => mathOperations.product('jatin', undefined)).toThrow(TypeError);
  });

  test('product operation', () => {
    expect(mathOperations.product(10, 5)).toEqual(50);
  });
});
