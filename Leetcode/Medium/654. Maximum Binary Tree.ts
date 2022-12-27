/**
 *  654. 最大二叉树
 *  https://leetcode.cn/problems/maximum-binary-tree/
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

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  return build(nums, 0, nums.length - 1);

  function build(nums: number[], low: number, high: number): TreeNode | null {
    if (low > high) return null;

    let i = low;
    for (let j = low + 1; j <= high; j++) {
      if (nums[i] < nums[j]) i = j;
    }

    const root = new TreeNode(nums[i]);
    root.left = build(nums, low, i - 1);
    root.right = build(nums, i + 1, high);

    return root;
  }
}
