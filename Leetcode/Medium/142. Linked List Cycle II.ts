/**
 *  142. 环形链表 II
 *  https://leetcode.com/problems/linked-list-cycle-ii/
 *
 *  思路：
 *  与 141. 环形链表 题目几乎相同，只不过返回的是一个链表
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

function detectCycle(head: ListNode | null): ListNode | null {
  let set = new Set<ListNode>();

  while (head) {
    if (set.has(head)) {
      return head;
    } else {
      set.add(head);
    }
    head = head.next;
  }

  return null;
}
