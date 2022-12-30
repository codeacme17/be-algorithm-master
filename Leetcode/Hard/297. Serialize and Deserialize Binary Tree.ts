/**
 *  297. 二叉树的序列化与反序列化
 *  https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
 *
 *  思路：
 *  这道题很简单，
 *  serialize 的作用就是将二叉树转换为字符串
 *  deserialize 的作用就是将字符串转换成二叉树
 *
 *  1.
 *  在 serialize 的过程中，先准备一个数组，作为存储遍历结果的数据结构
 *  我们使用前序遍历，遍历整颗二叉树
 *  在遍历的过程中，遇到空节点，将 ”#“ 存入到数组中，以表示空节点
 *  最后，将数组 join 成字符串返回字符串作为结果
 *  2.
 *  deserialize 过程稍微有些复杂，需要将字符串先转换为数组
 *  之后创建一个 p 指针和 build 函数
 *  p 指针用来指向数组中的各个元素
 *  build 函数用来递归构建二叉树
 *  3.
 *  比较难理解的就是 p 指针的运作
 *  因为构建二叉树时，是先构建左树，再构建右树
 *  而在结构原始二叉树时，因为是前序遍历，所以数组的组成也是先左节点再右节点
 *  所以 p 指针可以按照顺序进行遍历，其实就是从左到右构建二叉树
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

function serialize(root: TreeNode | null): string {
  let res: (number | string)[] = []
  traverse(root)
  return res.join(",")

  function traverse(node: TreeNode | null): void {
    if (!node) {
      res.push("#")
      return
    }

    res.push(node.val)
    traverse(node.left)
    traverse(node.right)
  }
}

function deserialize(data: string): TreeNode | null {
  if (!data) return null
  let treeNodes = data.split(",")
  let p = 0
  return build(treeNodes)

  function build(nodes: (number | string)[]): TreeNode | null {
    if (nodes[p] === "#") {
      p++
      return null
    }
    const root = new TreeNode(parseInt(nodes[p] as string))
    p++

    root.left = build(nodes)
    root.right = build(nodes)
    return root
  }
}
