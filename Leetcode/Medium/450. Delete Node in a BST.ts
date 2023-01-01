/**
 *  450. 删除二叉搜索树中的节点
 *  https://leetcode.com/problems/delete-node-in-a-bst/description/
 *
 *  思路：
 *  本题最大的难点就是处理一系列的边缘问题
 *  其中最复杂的边缘问题就是当 node.val == key 时，并且 node.left 和 node.right 同时存在时
 *  因为，我们可以直接将 node.left 接入，但当 root.left.right 存在时，我们应该如何在不覆盖已有的
 *  树结构的同时将 root.right 固定？
 *
 *  其实如果想要在拼接的过程中保持原有的大小关系，其实就是需要将最小的值，即 node.left 拼接到右子树的最左子叶
 *  如下，我们需要将 1 节点拼接到 4 节点的左子树中
 *
 *         7                  7
 *        / \                / \
 *       3*  8              5   8
 *      / \       --->     / \
 *     1   5              4   6
 *        / \            /
 *       4   6          1
 *
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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return null

  if (root.val === key) {
    if (!root.left && !root.right) return null

    if (root.left && root.right) {
      let curr = root.right
      while (curr.left) curr = curr.left
      curr.left = root.left
      return root.right
    }

    if (!root.left) return root.right
    if (!root.right) return root.left
  }

  if (key < root.val) root.left = deleteNode(root.left, key)
  else root.right = deleteNode(root.right, key)

  return root
}
