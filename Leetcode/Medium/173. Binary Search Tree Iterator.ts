/**
 *  173. 二叉搜索树迭代器
 *  https://leetcode.com/problems/binary-search-tree-iterator/description/
 *
 *  思路：
 *  因为这道题有 next() 的存在，所以无法正常的进行递归
 *  所以需要维护一个栈，来模拟中序遍历
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

class BSTIterator {
  private root: TreeNode | null
  private stack: Array<TreeNode | null>

  constructor(root: TreeNode | null) {
    this.root = root
    this.stack = []
  }

  next(): number {
    while (this.root) {
      this.stack.push(this.root)
      this.root = this.root.left
    }
    this.root = this.stack.pop()!
    let res = this.root.val
    this.root = this.root.right

    return res
  }

  hasNext(): boolean {
    return !!this.root || !!this.stack.length
  }
}
