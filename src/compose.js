/**
 * @param {(function(*): string)[]} fns
 */
const compose = (...fns) => (...args) => {
  return fns.reduceRight((acc, fn) => {
    return fn(acc);
  }, args);
};
const compose2 = (...fns) =>
  fns.reduceRight((prevFn, nextFn) => {
    return (...args) => nextFn(prevFn(...args));
  }, value => {
    return value;
  });

const upperCase = str => str;
const exclaim = str => `${str}!`;
const repeat = str => `${str} `.repeat(3);

const withСompose = compose(
  repeat,
  exclaim,
  upperCase
);

const withСompose2 = compose2(
  repeat,
  exclaim,
  upperCase
);

console.log(withСompose('hacking'));
console.log(withСompose2('hacking'));
