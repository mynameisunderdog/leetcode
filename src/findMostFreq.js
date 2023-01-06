const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

const findMostFreq = stack => {
  if (Array.isArray(stack) && stack.length) {
    let maxValue = 0;
    let maxCount = 1;

    while (stack.length) {
      let counter = 1;

      const CH = stack.pop();

      stack.forEach(item => {
        if (item === CH) {
          counter++;

          if (counter > maxCount) {
            maxValue = item;

            maxCount = counter;
          }
        }
      });
    }
    console.log(`${maxValue} ( ${maxCount} times)`);
  }
};
findMostFreq(arr1);
