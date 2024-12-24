const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  // переводим скорость из часов в секунду, затем вычисляем количество ходов (2 ** disksNumber - 1), затем время (turnsNumber / turnsSpeedInSeconds)
  const SECONDS_PER_HOUR = 3600;
  const turnsSpeedInSeconds = turnsSpeed / SECONDS_PER_HOUR;
  const turns = Math.pow(2, disksNumber) - 1;
  const seconds = Math.floor(turns / turnsSpeedInSeconds);
  return { turns, seconds };
}

module.exports = {
  calculateHanoi
};
