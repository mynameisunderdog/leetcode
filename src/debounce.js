/**
 * @param {f} f
 * @param {number} ms
 */
const debounce = function (f, ms) {
  let isCooldown = false;
  return function () {
    if (isCooldown) return;
    f.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => isCooldown = false, ms);
  };

};

let log = '';

function f(a) {
  console.log(a)
  log += a;
}

f = debounce(f, 1000);

f(1); // вызвана
f(2); // проигнорирована

setTimeout(() => f(3), 100);  // проигнорирована (слишком рано)
setTimeout(() => f(4), 1100); // вызвана (1000 мс истекли)
setTimeout(() => f(5), 1500); // проигнорирована (менее 1000 мс с последнего вызова)
