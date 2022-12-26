/**
 *  543. 二叉树直径
 *  https://leetcode.com/problems/diameter-of-binary-tree/
 *
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function diameterOfBinaryTree(root: TreeNode | null): number {
  let max = 0;
  traverse(root);
  return max;

  function traverse(node: TreeNode | null) {
    if (!node) return 0;

    let leftDept = traverse(node.left);
    let rightDept = traverse(node.right);
    max = Math.max(leftDept + rightDept, max);

    return 1 + Math.max(leftDept, rightDept);
  }
}
