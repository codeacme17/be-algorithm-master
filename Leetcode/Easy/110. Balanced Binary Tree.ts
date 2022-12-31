/**
 *  110. 平衡二叉树
 *  https://leetcode.com/problems/balanced-binary-tree/description/
 *
 *  思路：
 *  其实本题就是比较左右子数的最大深度之差是否大于 1
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

function isBalanced(root: TreeNode | null): boolean {
  let res: boolean = true
  traverse(root)
  return res

  function traverse(node: TreeNode | null): number {
    if (!node) return 0

    let leftDepth = traverse(node.left)
    let rightDepth = traverse(node.right)

    if (Math.abs(leftDepth - rightDepth) > 1) res = false

    return Math.max(leftDepth, rightDepth) + 1
  }
}
