/**
 * @param {number[]} nums
 */
const _summaryRanges = (nums) => {
  const sorted = nums.sort((a, b) => a - b);
  let latest = null;
  let i = null;

  return sorted.reduce((results, n) => {
    if (latest === n) {
      return results;
    }
    console.log(n - 1)
    if (latest !== n - 1) {
      i = results.push([]);
    } else {
      i = results.length;
    }
    latest = n;
    results[i - 1].push(n);
    console.log(results)
    return results;
  }, []).map((result) => {
    console.log(result.length === 1 ? result[0] : `${result[0]} - ${result[result.length - 1]}`)
    return result.length === 1 ? result[0] : `${result[0]} - ${result[result.length - 1]}`
  }).toString();

}

/**
 * @param {number[]} nums
 */
const summaryRanges = function (nums) {
  let t = 0;
  const ans = [];
  nums = nums.sort((a, b) => a - b);
  nums.push('#');
  for (let i = 1; i < nums.length; i++)
    if (nums[i] - nums[t] !== i - t) {
      if (i - t > 1)
        ans.push(nums[t] + '-' + (nums[i - 1]))
      else
        ans.push(nums[t].toString())
      t = i
    }
  return ans
};

console.log(summaryRanges([3, 2, 1, 5, 6, -1, 10]))
console.log(summaryRanges([0,1,2,4,5,7]))
