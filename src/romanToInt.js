/**
 * @param {string} str
 * @return {number}
 */
const romanToInt = function (str) {
  const romanMatrix = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);
  let result = 0;
  let current = 0;
  let prev = 0;
  for (let char of str.split('').reverse()) {
    current = romanMatrix.get(char);
    if (current >= prev) {
      result += current;
    } else {
      result -= current;
    }
    prev = current;
  }
  return result;
};


console.log(romanToInt('I'));
console.log(romanToInt('II'));
console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('V'));
console.log(romanToInt('VI'));
console.log(romanToInt('VII'));
console.log(romanToInt('VIII'));
console.log(romanToInt('IX'));
console.log(romanToInt('X'));
console.log(romanToInt('XI'));
console.log(romanToInt('XII'));
console.log(romanToInt('XIII'));
console.log(romanToInt('XIV'));
console.log(romanToInt('XV'));
console.log(romanToInt('XVI'));
console.log(romanToInt('XVII'));
console.log(romanToInt('XVIII'));
console.log(romanToInt('XIX'));
console.log(romanToInt('XX'));
console.log(romanToInt('MCMXCIV'));
console.log(romanToInt('LVIII'));
