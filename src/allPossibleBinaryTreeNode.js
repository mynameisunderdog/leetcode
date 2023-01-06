



function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const allPossibleFBT = (n) => {
  if (n === 1) return [new TreeNode(0)];
  if (n % 2 === 0) return [];
  let res = [];
  for (let i = 1; i < n; i += 2) {
    let left = allPossibleFBT(i);
    let right = allPossibleFBT(n - i - 1);
    for (let l of left) {
      for (let r of right) {
        let root = new TreeNode(0);
        root.left = l;
        root.right = r;
        res.push(root);
      }
    }
  }
  return res;
};
console.log(allPossibleFBT(7));



