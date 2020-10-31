const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  depth = 1;
  result = 1;
  calculateDepth(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] instanceof Array === true) {
        this.depth++;
        this.calculateDepth(arr[i]);
      }
    }
    if (this.depth >= this.result) {
      this.result = this.depth;
    }
    this.depth = 1;
    return this.result;
  }
}
