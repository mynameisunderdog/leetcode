  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number}
   */
  const findKthLargest = function (nums, k) {
    // quick select
    // 1) Выбираем элемент разделитель - обычно последний элемент
    // и переставляем элементы так, что бы бОльшие оказались слева
    // а все меньшие справа от разделителя
    // 2) если разделитель оказался на k-м месте, значит это овет
    // потому что слева k -1 элементов больше
    // 3) если разделитель оказался на месте < k тогда надо искать в правой части
    // от разделителя части массив, уменьшив при этом k на позицию разделителя
    // 4) если разделитель оказался > k тогда ищем слева от разделителя

    // 1. Элемент разделитель -- обычно последний элемент и переставляем все бОльшие слева
    const idx = partition(nums, 0, nums.length - 1);

    // 2. если разделитель оказался на k-ом месте -- это ответ
    if (idx === k - 1) {
      return nums[idx];
    }
    // 3. если разделитель оказался на месте < k тогда надо искать в правой части
    if (idx < k) {
      return findKthLargest(nums.slice(idx + 1), k - idx - 1);
    }
    // 4. если разделитель оказался > k тогда ищем слева от разделителя
    return findKthLargest(nums.slice(0, idx), k)
  };

  /**
   * @param {number[]} arr
   * @param {number} from
   * @param {number} to
   */
  function partition(arr, from, to) {
    let pivot = from;
    for (let i = from; i < to; i++) {
      if (arr[i] > arr[to]) {
        [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
        pivot++;
      }
    }
    [arr[pivot], arr[to]] = [arr[to], arr[pivot]];
    return pivot;
  }

  console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
