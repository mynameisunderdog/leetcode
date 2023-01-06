const intervalsCompare = (a, b) => a[0] - b[0];

const calculateDistance = (start, end) => Math.abs(start - end);

// complexity: N * logN + N => O(N * logN)
const sumIntervals = intervals => {
  const sortedIntervals = intervals.sort(intervalsCompare);
  let left = Number.MIN_SAFE_INTEGER;
  let right = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (const interval of sortedIntervals) {
    const [start, end] = interval;
    if (start > right) {
      sum += calculateDistance(right, left);
      left = start;
      right = end;
    }
    if (end > right) {
      right = end;
    }
  }

  return sum + calculateDistance(right, left);
};

console.log(sumIntervals([
  [1, 2],
  [6, 10],
  [11, 15]
])) // => 9

console.log(sumIntervals([
  [1, 4],
  [7, 10],
  [3, 5]
])) // => 7
