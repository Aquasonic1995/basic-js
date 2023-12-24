const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {

    // Convert the number to a string to work with individual digits
    const numStr = n.toString();

    // Initialize variables to store the maximum number and the length of the string
    let maxNum = 0;
    const len = numStr.length;

    // Iterate through each digit and try deleting it to find the maximum number
    for (let i = 0; i < len; i++) {
      // Create a new number by removing the digit at index i
      const newNum = parseInt(numStr.substring(0, i) + numStr.substring(i + 1));

      // Update maxNum if the new number is greater
      maxNum = Math.max(maxNum, newNum);
    }

    // Return the maximum number obtained by deleting a digit
    return maxNum;

}

module.exports = {
  deleteDigit
};
