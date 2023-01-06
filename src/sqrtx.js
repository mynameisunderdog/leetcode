/**
 * https://leetcode.com/problems/sqrtx/
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  let left = 0;
  let right = x;
  while (left < right) {
    const mid = Math.round((right - left) / 2) + left;
    if (mid * mid === x) {
      return mid;
    }
    if (x < mid * mid) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return x < right * right ? right - 1 : right;
};


console.log(mySqrt(4)); // 2
console.log(mySqrt(8)); // 2
console.log(mySqrt(6)); // 2
console.log(mySqrt(3)); // 1
