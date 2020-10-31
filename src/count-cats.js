const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  //throw new CustomError('Not implemented');
  let resultArray = [];
  array.forEach(element => {
    for (let i = 0; i < element.length; i++) {
      if (element[i] === '^^') {
        resultArray.push(element[i]);
      }
    }
  });
  return resultArray.length;
};
