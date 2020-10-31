const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let result;
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  } else if (typeof date.getMonth !== 'function') {
    throw 'Error';
  } else {
    let n = +date;
    if (n !== 0) {
      const month = date.getMonth();
      switch (month) {
        case 0: case 1: case 11:
          result = "winter";
          break;
        case 2: case 3: case 4:
          result = "spring";
          break;
        case 5: case 6: case 7:
          result = "summer";
          break;
        case 8: case 9: case 10:
          result = "autumn";
          break;
        default: 
          result = 'Unable to determine the time of year!'
      }
      return result;
    } else {
      return 'Unable to determine the time of year!';
    }
  }
};
