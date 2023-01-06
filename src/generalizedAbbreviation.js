// /** 1: Recursion
//  * @param {string} word
//  * @return {string[]}
//  */
// const generateAbbreviations = function (word) {
//   const result = []
//   const aux = (s, count, start = 0) => {
//     if (count === 0) {
//       result.push(s.replace(/1+/g, x => x.length))
//       return
//     }
//     if (count === s.length) {
//       result.push(`${count}`)
//       return
//     }
//     if (count > s.length - start) {
//       return
//     }
//     for (let i = start; i < s.length; i++) {
//       aux(s.slice(0, i) + 1 + s.slice(i + 1), count - 1, i + 1)
//     }
//   }
//   for (let replaceCount = 0; replaceCount <= word.length; replaceCount++) {
//     aux(word, replaceCount)
//   }
//   return result
// }

/** 1.2: Recursion
 * @param {string} word
 * @return {string[]}
 */
const generateAbbreviations = function (word) {
  const result = []
  const helper = (index, current = '', count) => {
    if (index > word.length - 1) {
      result.push(current + (count > 0 ? count : ''))
      return
    }
    helper(index + 1, current + (count > 0 ? count : '') + word[index], 0)
    helper(index + 1, current, count + 1)
  }
  helper(0, '', 0)
  return result
}

console.log(generateAbbreviations('word'));
console.log(generateAbbreviations('hello'));

