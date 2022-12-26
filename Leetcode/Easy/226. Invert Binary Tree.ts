/**
 *  226. 翻转二叉树
 *  https://leetcode.cn/problems/invert-binary-tree/
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
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  let left = invertTree(root.left);
  let right = invertTree(root.right);

  root.left = right;
  root.right = left;

  return root;
}

// 遍历方法
function invertTree2(root: TreeNode | null): TreeNode | null {
  traverse(root);
  return root;

  function traverse(node: TreeNode | null): void {
    if (!node) return;

    let temp = node.left;
    node.left = node.right;
    node.right = temp;

    traverse(node.left);
    traverse(node.right);
  }
}
