/**
 *  104. 二叉树的最大深度
 *  https://leetcode.com/problems/maximum-depth-of-binary-tree/
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

// 分解子问题方法
function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  let leftMax = maxDepth(root.left);
  let rightMax = maxDepth(root.right);

  return Math.max(leftMax, rightMax) + 1;
}

// 递归遍历方法
function maxDepth2(root: TreeNode | null): number {
  let res = 0;
  let depth = 0;

  function traverse(root: TreeNode | null): void {
    if (!root) return;

    depth++;
    if (!root.left && !root.right) res = Math.max(res, depth);
    traverse(root.left);
    traverse(root.right);
    depth--;
  }

  traverse(root);
  return res;
}
