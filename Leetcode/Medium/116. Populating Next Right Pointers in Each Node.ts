/**
 *  116. 填充每个节点的下一个右侧节点指针
 *  https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/
 *
 */

class MNode {
  val: number;
  left: MNode | null;
  right: MNode | null;
  next: MNode | null;
  constructor(val?: number, left?: MNode, right?: MNode, next?: MNode) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

function connect(root: MNode | null): MNode | null {
  if (!root) return null;
  traverse(root.left, root.right);
  return root;

  function traverse(node1: MNode | null, node2: MNode | null): void {
    if (!node1 || !node2) return;
    node1.next = node2;

    traverse(node1.left, node1.right);
    traverse(node2.left, node2.right);
    traverse(node1.right, node2.left);
  }
}
