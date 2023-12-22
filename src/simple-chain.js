const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    chain: [],

    getLength() {
      return this.chain.length;
    },
    addLink(value = '') {
      this.chain.push(value);
      return this;
    },
    removeLink(position) {
      if (
          typeof(position) !=="number"||
          position > this.chain.length ||
          position <= 0
      ) {
        this.chain.length = 0;
        throw new Error(`You can't remove incorrect link!`);
      }
      this.chain.splice(position - 1, 1);
      return this;
    },
    reverseChain() {
      this.chain = this.chain.reverse();
      return this;
    },
    finishChain() {
      const finishedChain = this.chain.map(chainlink => `( ${chainlink} )`).join('~~');
      this.chain.length = 0;
      return finishedChain;
    }
};

module.exports = {
  chainMaker
};
