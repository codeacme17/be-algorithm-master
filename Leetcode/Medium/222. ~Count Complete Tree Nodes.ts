/**
 *  222. 完全二叉树的节点个数
 *  https://leetcode.com/problems/count-complete-tree-nodes/description/
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

function countNodes(root: TreeNode | null): number {
  if (!root) return 0

  let l_depth = 0
  let r_depth = 0
  let node = root

  while (node.left) {
    l_depth++
    node = node.left
  }
  while (node.right) {
    r_depth++
    node = node.right
  }

  if (l_depth === r_depth) return Math.pow(2, l_depth + 1) - 1

  return countNodes(root.left) + countNodes(root.right) + 1
}
