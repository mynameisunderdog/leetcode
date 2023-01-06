/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = (nums) => {
  // границы left,right
  // цикл пока right - left  > 1
  // делим пополам
  // проверяем проверяем нахождения пика
  // если справа пик, двигаем left
  // если слева, двигаем right
  // вернуть left + 1 || right + 1
  let left = -1;
  let right = nums.length;

  while (right - left > 1) {
    // округляем вниз
    let mid = Math.floor((left + right) / 2);

    // восходящий тренд
    if (nums[mid] < nums[mid + 1]) {
      left = mid;
    } else {
      right = mid;
    }
  }
  // или right -1;
  return left + 1;
};


console.log(findPeakElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 6, 5, 4, 3, 2, 1]))
