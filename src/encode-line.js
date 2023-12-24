const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  let res = '';
  let num = 1;

  for (let i = 0; i < str.length; i++) {
    // Check if the current character is the same as the next one
    if (str[i] === str[i + 1]) {
      // If the characters are the same, increment the count
      num++;
    } else {
      // If the characters are different, append the count and character to the result
      res += (num > 1 ? num : '') + str[i];
      num = 1; // Reset the count for the next character
    }
  }

  return res;
}

module.exports = {
  encodeLine
};
