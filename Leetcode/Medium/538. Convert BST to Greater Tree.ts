/**
 *  538. 把二叉搜索树转换为累加树
 *  https://leetcode.com/problems/convert-bst-to-greater-tree/description/
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

function convertBST(root: TreeNode | null): TreeNode | null {
  let sum = 0
  traverse(root)
  return root

  function traverse(node: TreeNode | null): void {
    if (!node) return
    traverse(node.right)
    sum += node.val
    node.val = sum
    traverse(node.left)
  }
}
