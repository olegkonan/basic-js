const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    value !== undefined ? this.chain.push(`( ${value} )`) : this.chain.push(`(  )`);
    return this;
  },
  removeLink(position) {
    if ((position - 1) < 0 || position > this.chain.length || isNaN(position) || position !== Math.trunc(position)) {
      this.chain = [];
      throw "Error";
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
