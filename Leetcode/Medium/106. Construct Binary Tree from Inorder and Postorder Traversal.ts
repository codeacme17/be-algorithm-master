/**
 *  106. 从中序与后序遍历序列构造二叉树
 *  https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 *
 *  思路：
 *  与 Leetcode 105 解法几乎相同
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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  const indexMap = new Map<number, number>()

  for (let i = 0; i < inorder.length; i++) {
    indexMap.set(inorder[i], i)
  }

  return build(
    inorder,
    0,
    inorder.length - 1,
    postorder,
    0,
    postorder.length - 1
  )

  function build(
    inorder: number[],
    inStart: number,
    inEnd: number,
    postorder: number[],
    postStart: number,
    postEnd: number
  ): TreeNode | null {
    if (postStart > postEnd) return null

    let rootValue = postorder[postEnd]
    let index = indexMap.get(rootValue)
    let root = new TreeNode(rootValue)
    let leftLength = index! - inStart

    root.left = build(
      inorder,
      inStart,
      index! - 1,
      postorder,
      postStart,
      postStart + leftLength - 1
    )

    root.right = build(
      inorder,
      index! + 1,
      inEnd,
      postorder,
      postStart + leftLength,
      postEnd - 1
    )

    return root
  }
}
