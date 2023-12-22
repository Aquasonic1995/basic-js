const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats( matrix) {
    let catCount = 0;

    // Iterate through each row in the backyard
    for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
        // Iterate through each column in the current row
        for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx++) {
            // Check if the current element is '^^'
            if (matrix[rowIdx][colIdx] === '^^') {
                // Increment the cat count
                catCount++;
            }
        }
    }
    return catCount;
}

module.exports = {
  countCats
};
