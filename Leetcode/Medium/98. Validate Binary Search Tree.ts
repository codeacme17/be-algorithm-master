/**
 *  98. 验证二叉搜索树
 *  https://leetcode.com/problems/validate-binary-search-tree/description/
 *
 *  思路：
 *  因为 BST 的特性就是，所有左侧的子树都要小于右侧的子树
 *  所以这道题就需要验证各个节点是否满足这一特性
 *  但有一个注意点
 *  我们需要记录 “最大” 和 “最小” 值，
 *  其实就是在向左树遍历时，记录上一个节点的大小，作为 max
 *  右侧则相反，记为 min
 *  如此一来，有了上一个节点的最大或最小值，就可以判断当前的节点是否合法
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

function isValidBST(root: TreeNode | null): boolean {
  return valid(root, null, null)

  function valid(
    node: TreeNode | null,
    min: TreeNode | null,
    max: TreeNode | null
  ): boolean {
    if (!node) return true

    if (min && node.val <= min.val) return false
    if (max && node.val >= max.val) return false

    return valid(node.left, min, node) && valid(node.right, node, max)
  }
}
