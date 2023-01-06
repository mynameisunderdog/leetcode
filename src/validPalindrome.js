/**
 * Given a string s, determine if it is a palindrome,
 * considering only alphanumeric characters and ignoring cases.
 * g modifier: global. All matches (don't return on first match)
 * i modifier: insensitive. (невосприимчивый) Case insensitive match (ignores case of [a-zA-Z])
 * @param {string} s
 */
const isPalindrome = function (s) {
  const result = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  return result === result.split('').reverse().join('');
};


console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false
