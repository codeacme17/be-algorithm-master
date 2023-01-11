/**
 *  95. 不同的二叉搜索树 II
 *  https://leetcode.com/problems/unique-binary-search-trees-ii/description/
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

function generateTrees(n: number): Array<TreeNode | null> {
  if (n === 0) return [new TreeNode()]
  return build(1, n)
}

function build(lo: number, hi: number): (TreeNode | null)[] {
  let res: (TreeNode | null)[] = []

  if (lo > hi) {
    res.push(null)
    return res
  }

  for (let mid = lo; mid <= hi; mid++) {
    let leftTrees: Array<TreeNode | null> = build(lo, mid - 1)
    let rightTrees: Array<TreeNode | null> = build(mid + 1, hi)

    for (let left of leftTrees) {
      for (let right of rightTrees) {
        let root = new TreeNode(mid)
        root.left = left
        root.right = right
        res.push(root)
      }
    }
  }

  return res
}
