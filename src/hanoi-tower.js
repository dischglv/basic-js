const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let secondsPerTurn = 3600 / turnsSpeed;

  if (disksNumber == 1) {
    return {
    	turns: 1,
      seconds: secondsPerTurn
    }
  } else {
  	let obj = calculateHanoi(disksNumber - 1, turnsSpeed);
    let turns = 2 * obj.turns + 1;
    let seconds = Math.floor(secondsPerTurn * turns);
    
    return {
      turns: turns,
      seconds: seconds
    }
  }  
};
