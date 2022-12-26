/**
 *  124. 二叉树中的最大路径和
 *  https://leetcode.com/problems/binary-tree-maximum-path-sum/
 *
 *  思路：
 *  对于任意一个节点, 如果最大和路径包含该节点, 那么只可能是两种情况:
 *  1. 其左右子树中所构成的和路径值较大的那个加上该节点的值后向父节点回溯构成最大路径
 *  2. 左右子树都在最大路径中, 加上该节点的值构成了最终的最大路径
 *
 *  如果子树路径和为负则应当置0表示最大路径不包含子树
 *  判断在该节点包含左右子树的路径和是否大于当前最大路径和
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

function maxPathSum(root: TreeNode | null): number {
  let max = root!.val;
  traverse(root);
  return max;

  function traverse(node: TreeNode | null): number {
    if (!node) return 0;

    let left = Math.max(0, traverse(node.left));
    let right = Math.max(0, traverse(node.right));

    max = Math.max(max, node.val + left + right);
    return Math.max(left, right) + node.val;
  }
}
