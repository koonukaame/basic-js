const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // k = 0.693/ t1/2
  // t = ln(N0/N) / k
  if (typeof sampleActivity !== 'string') return false;
  const num = +sampleActivity;
  if (isNaN(num) || num <= 0 || num >= MODERN_ACTIVITY) return false;
  const LOG_OF_TWO = 0.693;
  const k = LOG_OF_TWO / HALF_LIFE_PERIOD;
  const t = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
  return t;
}

module.exports = {
  dateSample
};
