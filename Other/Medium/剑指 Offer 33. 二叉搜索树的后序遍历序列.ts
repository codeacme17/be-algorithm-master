/**
 *  剑指 Offer 33. 二叉搜索树的后序遍历序列
 *  https://leetcode.cn/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/
 *
 *  思路：
 *  根据一颗 BST 的规律和其后续遍历的结果，可以将一个数组转换成一个 BST
 *
 *  1. 数组中最后一个节点代表的是这颗树的根节点
 *  2. 数组中的第一个节点代表这棵树最小的节点
 *
 *
 *      5
 *     / \
 *    2   6
 *   / \
 *  1   3
 *
 *  1,3,2,6,5
 *        i j
 *        m p
 *
 *  i => m - 1 left subtree
 *  m => j     right subtree
 *
 */

function verifyPostorder(postorder: number[]): boolean {
  return valid(postorder, 0, postorder.length - 1)
}

function valid(postorder: number[], i: number, j: number): boolean {
  if (i >= j) return true

  let p = i
  while (postorder[p] < postorder[j]) p++
  let m = p
  while (postorder[p] > postorder[j]) p++

  return p === j && valid(postorder, i, m - 1) && valid(postorder, m, j - 1)
}
