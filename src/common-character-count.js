const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  function countCharacters(str) {
    const charCount = {};

    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }

    return charCount;
  }
  const count1 = countCharacters(s1);
  const count2 = countCharacters(s2);
  let result = 0;
  for (let char in count1) {
    if (count2.hasOwnProperty(char)) {
      result += Math.min(count1[char], count2[char]);
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
