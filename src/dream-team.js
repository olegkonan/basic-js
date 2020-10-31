const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  let result = [];
  if (array instanceof Array === true) {
    array.forEach(element => {
      if (typeof(element) === "string") {
        let trimmedElement = element.trim();
        let letter = trimmedElement[0].toUpperCase();
        result.push(letter);
      }
    });
    return (result.sort()).join('');
  } else {
    return false;
  }
};
