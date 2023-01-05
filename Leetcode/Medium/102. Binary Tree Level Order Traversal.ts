/**
 *  102. 二叉树的层序遍历
 *  https://leetcode.com/problems/binary-tree-level-order-traversal/submissions/871642421/
 *
 *  与 Leetcode 103 题相似，只不过更简单
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

function levelOrder(root: TreeNode | null): number[][] {
  let res: number[][] = []
  traverse(root, 0)
  return res

  function traverse(node: TreeNode | null, layer: number): void {
    if (!node) return
    if (!res[layer]) res.push([])
    res[layer].push(node.val)

    traverse(node.left, layer + 1)
    traverse(node.right, layer + 1)
  }
}
