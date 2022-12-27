/**
 *  114. 二叉树展开为链表
 *  https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/
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

function flatten(root: TreeNode | null): void {
  if (!root) return;

  flatten(root.left);
  flatten(root.right);

  let tempL: TreeNode | null = root.left;
  let tempR: TreeNode | null = root.right;
  root.left = null;
  root.right = tempL;
  let p: TreeNode | null = root;
  while (p.right) {
    p = p?.right;
  }
  p.right = tempR;
}
