/**
 *  700. 二叉搜索树中的搜索
 *  https://leetcode.com/problems/search-in-a-binary-search-tree/description/
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

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  let res: TreeNode | null = null
  traverse(root)
  return res

  function traverse(node: TreeNode | null): TreeNode | null {
    if (!node) return null

    if (node.val === val) res = node

    if (node.val > val) node.left = traverse(node.left)
    if (node.val < val) node.right = traverse(node.right)

    return node
  }
}
