const qsort = (arr) => {
  if (arr.length < 2) {
    return arr;
  } else {
    // Опорная точка для деления массива, выбирается случайно
    const pivotPosition = Math.floor(Math.random() * arr.length);
    const pivot = arr[pivotPosition];
    // Значения меньшие, либо равные опорному
    // попадают в новый массив less
    const less = arr.filter((value, index) => {
      const isPivot = index === pivotPosition;
      return !isPivot && (value <= pivot);
    });
    // Значения, которые больше опорного
    // попадают в новый массив less
    const greater = arr.filter(value => value > pivot);

    /***
     /* Более оптимальное решение — использовать цикл и разделить массив за одну итерацию
     /* let less = [];
     /* let greater = [];
     /* for (let i = 0; i < arr.length; i++) {
		/*	const isPivot = i === pivotPosition;
		/*	if(arr[i] <= pivot && !isPivot) {
		/*		less.push(arr[i])
		/*	} else if (arr[i] > pivot) {
		/*		greater.push(arr[i]);
		/*	}
		/*}
     **/

    return [...qsort(less), pivot, ...qsort(greater)];
  }
};

const arr = [1, 213, 3, 5, 2, 8, 7];
console.log(qsort(arr));
