/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  let mapping = {};
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const sorted = str.split('').sort().join('');

    if (mapping[sorted] === undefined) {
      mapping[sorted] = [str];
    } else {
      mapping[sorted].push(str);
    }
  }

  const output = [];
  for (const arr in mapping) {
    output.push(mapping[arr]);
  }

  return output;
};

// [ [ 'ate', 'eat', 'tea' ], [ 'bat' ], [ 'nat', 'tan' ] ]
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
