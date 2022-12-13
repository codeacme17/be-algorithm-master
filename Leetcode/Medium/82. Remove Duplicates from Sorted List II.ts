/**
 *  82. 删除排序链表中的重复元素 II
 *  https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let pre: ListNode | null = dummy;

  while (head) {
    if (head.next && head.val === head.next.val) {
      while (head.next && head.val === head.next.val) {
        head = head.next;
      }
      pre!.next = head.next;
    } else {
      pre = pre!.next;
    }
    head = head.next;
  }

  return dummy.next;
}
