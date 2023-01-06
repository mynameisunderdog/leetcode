const arr1 = [3, 5, 6, 10, 11, 20];
const arr2 = [1, 1, 1, 1, 2, 7, 8, 15, 19];

// O(n) time & O(n) space
function mergeTwo(arr1, arr2) {
  let merged = [];
  let index1 = 0;
  let index2 = 0;
  let current = 0;

  while (current < (arr1.length + arr2.length)) {

    let isArr1Depleted = index1 >= arr1.length;
    let isArr2Depleted = index2 >= arr2.length;

    if (!isArr1Depleted && (isArr2Depleted || (arr1[index1] < arr2[index2]))) {
      merged[current] = arr1[index1];
      index1++;
    } else {
      merged[current] = arr2[index2];
      index2++;
    }

    current++;
  }

  return merged;
}

const test = mergeTwo(arr1, arr2);
console.log(test);
// [1, 2, 3, 5, 6, 7, 8, 10, 11, 15, 19, 20]
