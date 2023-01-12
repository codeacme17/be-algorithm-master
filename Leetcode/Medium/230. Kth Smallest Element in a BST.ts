/**
 *  230. 二叉搜索树中第K小的元素
 *  https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/
 *
 *  思路:
 *  一个二叉树的中序遍历，就是一个递增的数组
 *  所以本题只需要进行中序遍历，并比较 k 和 rank 的值是否相等就可以
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

function kthSmallest(root: TreeNode | null, k: number): number {
  let res = 0
  let rank = 0
  traverse(root)
  return res

  function traverse(node: TreeNode | null): void {
    if (!node) return
    traverse(node.left)
    rank++
    if (rank === k) {
      res = node.val
      return
    }
    traverse(node.right)
  }
}
