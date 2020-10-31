const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const result = {
    turns: 0,
    seconds: 0
  }
  const speed = 3600 / turnsSpeed;
  result.turns = Math.pow(2, disksNumber) - 1;
  result.seconds = Math.floor(speed * result.turns);
  return result;
};
