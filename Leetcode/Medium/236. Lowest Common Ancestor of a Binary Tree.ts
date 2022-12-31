/**
 *  236. 二叉树的最近公共祖先
 *  https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/
 *
 *  思路：
 *  递归整颗二叉树，当当前递归的节点与 p 或者 q 相同，
 *  则返回一个标志 “true” 如果不相同则返回 “false”
 *  这个标志用来代表是否在路径中找到了需要的节点
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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  let ans: TreeNode | null = null
  traverse(root, p, q)
  return ans

  function traverse(
    node: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null
  ): boolean {
    if (!node) return false

    const left = traverse(node.left, p, q) ? 1 : 0
    const right = traverse(node.right, p, q) ? 1 : 0
    const mid = node.val === p!.val || node.val === q!.val ? 1 : 0

    if (mid + left + right >= 2) ans = node
    return left + right + mid > 0
  }
}
