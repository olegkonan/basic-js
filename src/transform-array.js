const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (arr instanceof Array !== true) {
    throw "Error";
  } else if (arr.length === 0) {
    return arr;
  } else {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case '--discard-next': 
          i++;
          break;
        case '--discard-prev': 
          if (result[result.length - 1] === arr[i - 1]) {
            result.pop();
          }
          break;
        case '--double-next': 
          if (arr[i + 1]) {result.push(arr[i + 1]);}
          break;
        case '--double-prev': 
          if (result.length !== 0 && result[result.length - 1] === arr[i - 1]) {result.push(result[result.length - 1]);}
          break;
        default: result.push(arr[i]);
      }
    }
    return result;
  }
};
