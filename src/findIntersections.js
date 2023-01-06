/*
 find intersections in one time

 [ ] expect 0
 [(1, 5), (5, 10)] expect 1
 [(1, 5), (0, 1), (4, 5)] expect 2
 [(1, 10), (5, 6), (2, 3), (7, 8)] expect 2
 */
function findIntersections(intervals) {
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  let count = 0;
  let i = 0;
  let j = 1;
  while (i < sortedIntervals.length && j < sortedIntervals.length) {
    const [start1, end1] = sortedIntervals[i];
    const [start2, end2] = sortedIntervals[j];

    if (start1 <= end2 && end1 >= start2) {
      count++;
    }

    if (end1 < start2) {
      i++;
    } else {
      j++;
    }
  }

  return count;
}

console.log(findIntersections([[1, 5], [5, 10]]));
console.log(findIntersections([[1, 5], [0, 1], [4, 5]]));
