/**
 *  889. 根据前序和后序遍历构造二叉树
 *  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/
 *
 *  思路：
 *  本题与 Leetcode 105 、106 最大的差别就是关于左右子树的的查找方式
 *  因为之前有中序遍历的存在，所以只要找到根元素在中序数组中的索引，就可以拆分出左树和右树
 *  但在本题中，没有了中序遍历，所以需要依靠其他的方式进行查找左右子树
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

function constructFromPrePost(
  preorder: number[],
  postorder: number[]
): TreeNode | null {
  const indexMap = new Map<number, number>()

  for (let i = 0; i < postorder.length; i++) {
    indexMap.set(postorder[i], i)
  }

  return build(
    preorder,
    0,
    preorder.length - 1,
    postorder,
    0,
    postorder.length - 1
  )

  function build(
    preorder: number[],
    preStart: number,
    preEnd: number,
    postorder: number[],
    postStart: number,
    postEnd: number
  ): TreeNode | null {
    return null
  }
}
