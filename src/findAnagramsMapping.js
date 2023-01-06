/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const anagramMappings = (A, B) => {
  const map = {};

  B.forEach((number, index) => (map[number] = index));

  return A.map(number => map[number]);
};

// [1, 4, 3, 2, 0]
console.log(anagramMappings([12, 28, 46, 32, 50], [50, 12, 32, 46, 28]));
