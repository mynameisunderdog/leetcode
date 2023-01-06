/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const _twoSum = function(nums, target) {
  const values = new Map();

  for (let i = 0; i < nums.length; i++) {
    const targetSubtract = target - nums[i];
    const matchingValue = values.get(targetSubtract);
    if (matchingValue !== undefined) {
      return [matchingValue, i];
    }
    values.set(nums[i], i);
  }
};

/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 */
const twoSum = (nums, target) => {
  let map = new Map();

  for(let i = 0; i < nums.length; i ++) {
    if(map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }m
  return [];
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));
