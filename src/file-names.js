const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names ) {
  const renamedFiles = {};
  const result = [];

  for (const name of names) {
    let newName = name;

    // Check if the name already exists
    while (renamedFiles[newName]) {
      // If it exists, add a suffix to the name
      const match = newName.match(/\((\d+)\)$/);
      const suffix = match ? parseInt(match[1]) + 1 : 1;
      newName = match ? newName.replace(/\(\d+\)$/, `(${suffix})`) : `${newName}(1)`;
    }

    // Mark the name as used
    renamedFiles[newName] = true;

    // Add the new name to the result array
    result.push(newName);
  }

  return result;
}

module.exports = {
  renameFiles
};
