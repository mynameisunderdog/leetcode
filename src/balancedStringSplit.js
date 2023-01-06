/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = function (s) {
  let total = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'R') {
      count++;
    } else {
      count--;
    }
    if (count === 0) {
      total++;
    }
  }
  return total;
};
const input1 = "RLRRLLRLRL";
const input2 = "RLLLLRRRLR";


console.log(balancedStringSplit(input1)); // 4
console.log(balancedStringSplit(input2)); // 3
