/**
 *  94. 二叉树的中序遍历
 *  https://leetcode.com/problems/binary-tree-inorder-traversal/
 *
 *  思路：
 *  inorder traversal - 中序遍历
 *  中序遍历的记忆法 ”左根右“，即先遍历左节点，再遍历根节点，最后遍历右节点
 *  递归公式：
 *  preorder(node) = preorder(node->left) --> print node —> preorder(node->right)
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

function inorderTraversal(root: TreeNode | null): number[] {
  let res: number[] = [];
  recursion(root as TreeNode, res);
  return res;
}

function recursion(root: TreeNode, res: number[]) {
  if (root) {
    recursion(root.left as TreeNode, res);
    res.push(root.val);
    recursion(root.right as TreeNode, res);
  }
}
