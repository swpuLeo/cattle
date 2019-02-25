/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
  return Math.ceil(Math.log(buckets) / Math.log(minutesToTest / minutesToDie + 1));
};
