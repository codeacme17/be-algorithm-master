/**
 *  129. 求根节点到叶节点数字之和
 *  https://leetcode.com/problems/sum-root-to-leaf-numbers/description/
 *
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function sumNumbers(root: TreeNode | null): number {
  return traverse(root, 0)

  function traverse(node: TreeNode | null, sum: number): number {
    if (!node) return 0
    sum = sum * 10 + node.val
    if (!node.left && !node.right) return sum

    return traverse(node.left, sum) + traverse(node.right, sum)
  }
}
