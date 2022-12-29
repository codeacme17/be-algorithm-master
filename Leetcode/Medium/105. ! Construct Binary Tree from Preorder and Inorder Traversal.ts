/**
 *  105. 从前序与中序遍历序列构造二叉树
 *  https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 *
 *  思路：
 *  preorder: 1, 2, 5, 4, 6, 7, 3, 8, 9
 *  inorder:  5, 2, 6, 4, 7, 1, 9, 3, 9
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  let valToIndex = new Map()
  for (let i = 0; i < inorder.length; i++) {
    valToIndex.set(inorder[i], i)
  }

  return build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1)

  function build(
    preorder: number[],
    preStart: number,
    preEnd: number,
    inorder: number[],
    inStart: number,
    inEnd: number
  ): TreeNode | null {
    if (preStart > preEnd) return null

    let rootVal = preorder[preStart]
    let index = valToIndex.get(rootVal)

    let root = new TreeNode(rootVal)
    let leftSize = index - inStart

    root.left = build(
      preorder,
      preStart + 1,
      preStart + leftSize,
      inorder,
      inStart,
      index - 1
    )
    root.right = build(
      preorder,
      preStart + leftSize + 1,
      preEnd,
      inorder,
      index + 1,
      inEnd
    )

    return root
  }
}
