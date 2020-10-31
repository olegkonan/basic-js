const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(string) {
  //throw new CustomError('Not implemented');
  const type = typeof(string);
  let result;
  switch (type) {
    case "string": 
      const curActivity = parseFloat(string, 10);
      if (isNaN(curActivity) || curActivity <= 0 || curActivity > 15) {
        result = false;
      } else {
        const k = 0.693 / HALF_LIFE_PERIOD;
        const ln = Math.log(MODERN_ACTIVITY / curActivity);
        result = Math.ceil(ln / k);
      }
      break;
    default: 
      result = false;
  }
  return result;
};
