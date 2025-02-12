const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n ) {
    // Function to calculate the sum of digits in a number
    const sumDigits = num => {
      return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    };

    // Keep calculating the sum until a one-digit number is obtained
    while (n >= 10) {
      n = sumDigits(n);
    }

    return n;
}

module.exports = {
  getSumOfDigits
};
