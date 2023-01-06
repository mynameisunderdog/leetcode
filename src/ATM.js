// Задача была -- выдать деньги. Условие минимального количества купюр не ставилось,
// просто выдать, но желательно максимальными купюрами.

const limits = {
  5000: 4,
  1000: 2,
  500: 2,
  100: 5,
  50: 100
};

const getMoney = (amount, limits) => {
  const moneyTypes = Object.keys(limits).sort((a, b) => b - a);
  const minType = moneyTypes[moneyTypes.length - 1];
  let newLimits = {...limits};
  if (amount < minType) {
    console.log('error');
    return;
  }
  let all = amount;
  const result = moneyTypes.reduce((acc, item, index) => {
    let banknotes = 0;

    if (all >= item) {
      banknotes = parseInt(all / item);
    }

    if (banknotes > newLimits[item]) {
      banknotes = newLimits[item]
    }

    all = all - (item * banknotes);
    newLimits[item] = newLimits[item] - banknotes;

    acc[item] = banknotes
    return acc;
  }, {});

  if (all !== 0) {
    return new Error('error')
  }

  return {res: result, limits: newLimits};
}

console.log(getMoney(8450, limits))
