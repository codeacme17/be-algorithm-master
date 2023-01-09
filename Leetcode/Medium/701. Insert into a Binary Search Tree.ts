/**
 *  701. 二叉搜索树中的插入操作
 *  https://leetcode.com/problems/insert-into-a-binary-search-tree/description/
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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  // 如果当前的树，不存在任何节点，就创建并返回新节点，也表示找到了要插入的位置
  if (!root) return new TreeNode(val)

  // 因为根据 BTS 特性，插入的位置一定是 null 的时候，所以直接遍历即可
  if (root.val > val) root.left = insertIntoBST(root.left, val)
  if (root.val < val) root.right = insertIntoBST(root.right, val)

  return root
}
