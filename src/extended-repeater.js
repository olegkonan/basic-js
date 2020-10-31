const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const repeaterStr = String(str);
  let result = [];
  let additionArr = [];
  const repeaterOptions = {
    repeatTimes: 1,
    separator: '+',
    additionSeparator: '|',
    additionRepeatTimes: 1,
  }
  //check if options parameters are existing and add it or change
  if (options.repeatTimes !== undefined) {
    repeaterOptions.repeatTimes = options.repeatTimes;
  }
  if (options.separator !== undefined) {
    repeaterOptions.separator = options.separator;
  }
  if (options.additionSeparator !== undefined) {
    repeaterOptions.additionSeparator = options.additionSeparator;
  }
  if (options.additionRepeatTimes !== undefined) {
    repeaterOptions.additionRepeatTimes = options.additionRepeatTimes;
  }
  if (options.addition !== undefined) {
    repeaterOptions.addition = String(options.addition);
    for (let i = 0; i < repeaterOptions.additionRepeatTimes; i++) {
      additionArr.push(repeaterOptions.addition);
    }
  }
  
  let additionStr = additionArr.join(repeaterOptions.additionSeparator)
  
  for (let i = 0; i < repeaterOptions.repeatTimes; i++) {
    repeaterOptions.addition ? result.push(`${repeaterStr}${additionStr}`) : result.push(repeaterStr);
  }

  return result.join(repeaterOptions.separator);
};
  