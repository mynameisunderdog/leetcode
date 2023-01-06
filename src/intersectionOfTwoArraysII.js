/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
  const map = new Map();
  const result = [];

  for (const n of nums1) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  }
  for (const n of nums2) {
    if (map.has(n) && map.get(n) > 0) {
      result.push(n);
      map.set(n, map.get(n) - 1);
    }
  }
  return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2])); // [ 2, 2 ]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [ 9, 4 ]

let array1 = [1, 2, 2, 1];
let array2 = [2, 2];

const test =  array1.concat(array2.filter((item) => array1.indexOf(item) < 0))
// console.log(array1 = array1.filter(val => !array2.includes(val)))
console.log(test)
