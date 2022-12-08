/**
 *  876. 链表的中间结点
 *  https://leetcode.com/problems/middle-of-the-linked-list/
 *
 *  思路：
 *  快慢指针，
 *  快指针每次遍历向后移动两个节点
 *  满指针每次遍历向后移动一个节点
 *  本题一个关键点在于遍历条件
 *  需要确保当前的 fast 节点和其 next 节点都不为空才可以进行遍历
 *
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow!.next;
  }

  return slow;
}
