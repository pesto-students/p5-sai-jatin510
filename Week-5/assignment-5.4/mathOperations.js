const mathOperations = {
  isValidateInput: function (a, b) {
    return (
      typeof a === 'number' && typeof b === 'number' && !(isNaN(a) || isNaN(b))
    );
  },

  sum: function (a, b) {
    if (!this.isValidateInput(a, b)) throw new TypeError('Invalid input');

    return a + b;
  },

  diff: function (a, b) {
    if (!this.isValidateInput(a, b)) throw new TypeError('Invalid input');

    return a - b;
  },

  product: function (a, b) {
    if (!this.isValidateInput(a, b)) throw new TypeError('Invalid input');

    return a * b;
  },
};

module.exports = mathOperations;
