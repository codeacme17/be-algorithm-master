/**
 *  199. 二叉树的右视图
 *  https://leetcode.com/problems/binary-tree-right-side-view/
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

function rightSideView(root: TreeNode | null): number[] {
  const res: number[] = []
  const collection: number[][] = []

  function traverse(node: TreeNode | null, layer: number): void {
    if (!node) return

    if (!collection[layer]) collection[layer] = [node.val]
    else collection[layer].unshift(node.val)

    traverse(node.left, layer + 1)
    traverse(node.right, layer + 1)
  }

  traverse(root, 0)

  for (let i = 0; i < collection.length; i++) {
    res.push(collection[i][0])
  }

  return res
}
