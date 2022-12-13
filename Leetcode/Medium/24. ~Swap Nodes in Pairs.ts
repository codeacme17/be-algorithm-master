/**
 *  24. 两两交换链表中的节点
 *  https://leetcode.com/problems/swap-nodes-in-pairs/
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

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  let first = head;
  let second = first.next;
  let third = second!.next;

  second!.next = first;
  first.next = swapPairs(third);

  return second;
}
