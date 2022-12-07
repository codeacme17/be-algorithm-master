/**
 *  86. 分隔链表
 *  https://leetcode.com/problems/partition-list
 *
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

function partition(head: ListNode | null, x: number): ListNode | null {
  let temp1 = new ListNode(-1);
  let temp2 = new ListNode(-1);
  let p1 = temp1;
  let p2 = temp2;

  while (head) {
    if (head.val < x) {
      p1.next = head;
      p1 = p1.next;
    } else {
      p2.next = head;
      p2 = p2.next;
    }

    let temp = head.next;
    head.next = null;
    head = temp;
  }

  p1.next = temp2.next;
  return temp1.next;
}
