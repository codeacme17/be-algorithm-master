/**
 *  101. 对称二叉树
 *  https://leetcode.com/problems/symmetric-tree/description/
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

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return false

  return traverse(root.left, root.right)

  function traverse(
    left: TreeNode | null,
    right: TreeNode | null
  ): boolean {
    if (!left && !right) return true
    if (!left || !right) return false

    // 这里需要判断，左右子节点是否不同
    // 如果不同，那么就表示左右并不”镜像“
    if (left.val !== right.val) return false

    return (
      traverse(left.left, right.right) &&
      traverse(right.left, left.right)
    )
  }
}
