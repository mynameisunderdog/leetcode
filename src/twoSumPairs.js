// O(n)
let twoSum = (array, target) => {
  const results = [];
  let hashMap = [];

  for (let i = 0; i < array.length; i++) {
    console.log(3, hashMap[array[i]])
    if (hashMap[array[i]]) {
      results.push([hashMap[array[i]], array[i]])
    } else {
      console.log(1, hashMap[target - array[i]]);
      console.log(2, array[i])
      hashMap[target - array[i]] = array[i];
    }
  }
  return results;
}

console.log(twoSum([10, 20, 10, 40, 50, 60, 70, 30], 50));
