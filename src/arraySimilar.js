// Write a function that determines whether the passed in arrays are similar.
// Similar means they contain the same elements, and the same number of occurrences of elements.
// The order of the elements does not matter.
// Check number strings for equality
// Examples:
// [1, 2, 2, 3, 4], [1, 2, 2, 3, '4'] => false
// [1, 2, 3, "4"], [1, 2, 3, 4] => false
// [1, 2, 3, 4], [4, 3, 2, 1] => true
// [1, 2, 3, 4], [1, 2, 3, 4] => true
const arraysSimilar = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  const arr1Copy = [...arr1];
  const arr2Copy = [...arr2];
  arr1Copy.sort();
  arr2Copy.sort();
  for (let i = 0; i < arr1Copy.length; i++) {
    if (arr1Copy[i] !== arr2Copy[i]) return false;
  }
  return true;
};

console.log(arraysSimilar([1, 2, 3, 4], [1, 2, 3, '4'])); // false
console.log(arraysSimilar([1, 2, 3, 4], [1, 2, 3, 4])); // true
