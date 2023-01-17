/**
 *  103. 二叉树的锯齿形层序遍历
 *  https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 *
 *  思路：
 *  本题主要是要对每一层进行数组添加和排序
 *  所以需要一个 layer 变量来存储当前层数
 *  在刚进入一层中后，需要先判断本层中是否已在结果中存在，如果不存在则创建一个新的数组添加到结果中
 *  然后对 layer 进行除余的操作，如果结果不等于 0 则表示需要反转存储
 *  最后递归各个节点，本题使用前序遍历
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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  let res: number[][] = []
  traverse(root, 0)
  return res

  function traverse(node: TreeNode | null, layer: number): void {
    if (!node) return
    if (!res[layer]) res.push([])

    if (layer % 2 === 0) res[layer].push(node.val)
    else res[layer].unshift(node.val)

    traverse(node.left, layer + 1)
    traverse(node.right, layer + 1)
  }
}
