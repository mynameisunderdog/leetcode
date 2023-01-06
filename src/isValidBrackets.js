/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    switch (c) {
      case '(':
        stack.push(')');
        break;
      case '[':
        stack.push(']');
        break;
      case '{':
        stack.push('}');
        break;
      default:
        if (c !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
};


/**
 * @param {string} s
 * @return {boolean}
 */
const isValid2 = function (s) {
  // 1 not required!
  if (s.length === 0) return true
  if (s.length === 1) return false
  if (s.length % 2 !== 0) return false

  const dictionary = {
    '}': '{',
    ')': '(',
    ']': '['
  }
  const stack = []

  for (let i = 0; i < s.length; i++) {
    const currChar = s[i]
    const lastChar = stack[stack.length - 1]
    const delChar = dictionary[currChar]

    if (delChar) {
      // 2
      if (delChar === lastChar) {
        stack.pop()
      } else {
        return false
      }
    } else {
      stack.push(currChar)
    }
  }

// 3
  return !stack.length
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));

console.log(isValid2("()"));
console.log(isValid2("(((((("));
console.log(isValid2("()[]{}"));
console.log(isValid2("(]"));
console.log(isValid2("([)]"));
console.log(isValid2("{[]}"));
