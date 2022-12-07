/**
 *  206. 反转链表
 *  https://leetcode.com/problems/reverse-linked-list/
 *
 *  思路：
 *  需要准备两个指针分别指向当前节点cur和上一个节点pre，和一个备用链表temp
 *  当cur存在时进入循环
 *  1. 将cur.next存入到temp中，这样是避免失去原始head中的链表关系
 *  2. 将cur.next指向pre
 *  3. 将pre移动到cur
 *  4. 将temp存入cur
 *
 *  Review
 *  2022.12.7 Soso - 第一步将 cur 直接赋值给了 temp 导致失去原始 head 中的链表关系
 *
 */

function reverseList(head: ListNode | null): ListNode | null {
  let pre: ListNode | null = null;
  let cur: ListNode | null = head;
  let temp: ListNode | null;

  while (cur) {
    temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }

  return pre;
}

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
