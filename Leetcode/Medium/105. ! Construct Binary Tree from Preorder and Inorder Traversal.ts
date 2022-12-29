/**
 *  105. 从前序与中序遍历序列构造二叉树
 *  https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 *
 *  思路：
 *  preorder: 1, 2, 5, 4, 6, 7, 3, 8, 9
 *  inorder:  5, 2, 6, 4, 7, 1, 9, 3, 9
 *  可以判断出，每次递归的时候，preorder 的第一个元素就是当前的根节点 - preorder[preStart]
 *  而 inorder 之中，与该根节点值相同的元素的左侧代表的是该根节点下的左树，同理右边则是右树
 *
 *  问题：
 *  1.
 *  所以第一个需要解决的问题就是从 inorder 中获取到该根节点的下标
 *  我们可以在进入函数的时候创建一个 Map 来存储 inorder 的各元素和其下标
 *  Map <key: element，value: index>
 *  2.
 *  拿到 inorder 中的根节点后，就需要 ’拆分‘ 两条数组，
 *  将其分为左树和右树，从而进行递归
 *  inorder 很容易进行拆分，因为 index 左侧的就是左树，右侧的就是右树
 *  难点在于 preorder 的拆分
 *  3.
 *  如果想要拆分 preorder 树，需要确定左树的长度 leftSize，
 *  这样 [preStart + 1 ... leftSize - 1] 就代表 preorder 上的左树
 *  而 [preStart + 1 + leftSize ... preEnd] 就代表 preorder 上的右树
 *
 *  如此一来就可以将 preorder 和 inorder 中的左右树进行递归操作，从而获取结果
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  let valToIndex = new Map()
  for (let i = 0; i < inorder.length; i++) {
    valToIndex.set(inorder[i], i)
  }

  return build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1)

  function build(
    preorder: number[],
    preStart: number,
    preEnd: number,
    inorder: number[],
    inStart: number,
    inEnd: number
  ): TreeNode | null {
    if (preStart > preEnd) return null

    let rootVal = preorder[preStart]
    let index = valToIndex.get(rootVal)
    let root = new TreeNode(rootVal)
    let leftSize = index - inStart

    root.left = build(
      preorder,
      preStart + 1,
      preStart + leftSize,
      inorder,
      inStart,
      index - 1
    )
    root.right = build(
      preorder,
      preStart + leftSize + 1,
      preEnd,
      inorder,
      index + 1,
      inEnd
    )

    return root
  }
}
