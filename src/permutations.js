/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
  let result = [];

  function helper(nums, arr) {
    if (nums.length === 0) {
      return result.push([...arr])
    }
    for (let i = 0; i < nums.length; i++) {
      arr.push(nums[i]); // 0
      // console.log('1==>', arr);
      let decreased = nums.filter((n, index) => index !== i);
      // console.log('2==>', decreased);
      helper(decreased, arr);
      // console.log('3==>', arr)
      arr.pop(); // unchoose
    }
  }

  helper(nums, []);
  // console.log('4==>', result);
  return result;
};

console.log(permute([1, 2, 3]))
// console.log(permute([0, 1]))
// console.log(permute([1]));