/**
 *  144. 二叉树的前序遍历
 *  https://leetcode.com/problems/binary-tree-preorder-traversal/description/
 *
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(
    val?: number,
    left?: TreeNode | null,
    right?: TreeNode | null
  ) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function preorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = []

  function traverse(node: TreeNode | null): void {
    if (!node) return

    res.push(node.val)
    traverse(node.left)
    traverse(node.right)
  }

  traverse(root)
  return res
}
