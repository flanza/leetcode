/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      let low = 1, high = n, mid;
      while (low <= high) {
          mid = Math.floor((low + high) / 2);
          const isBad = isBadVersion(mid);
          const isPreviousBad = mid > 1 && isBadVersion(mid - 1);
          if (isBad && !isPreviousBad) {
              return mid;
          } else if (!isBad) {
              low = mid + 1;
          } else {
              high = mid - 1;
          }
      }
  };
};