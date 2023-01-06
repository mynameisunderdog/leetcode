/**
 * https://leetcode.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  const arr = String(x).split('');

  while (arr.length > 1) {
    if (arr.shift() !== arr.pop()) {
      return false;
    }
  }

  return true;
};


console.log(isPalindrome(121));
