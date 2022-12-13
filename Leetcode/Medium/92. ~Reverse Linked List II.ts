/**
 *  92. 反转链表 II
 *  https://leetcode.com/problems/reverse-linked-list-ii/
 *
 *  思路：
 *  用两个指针切分链表，
 *  一个指向 left 之前的 Node，另一个指向 right 的 Node，
 *  将两个指针中的链表使用 [206. 反转链表] 用到的方法进行反转
 *  然后再进行拼接
 *
 *  注意：
 *  与 [206. 反转链表] 方法不同的是，本次不需要返回一个链表,
 *  而是直接更改所传链表，因为会失去指向最后的索引位置
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

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  let dummy: ListNode | null = new ListNode(-1);
  dummy.next = head;

  let pre: ListNode | null = dummy;
  for (let i = 0; i < left - 1; i++) {
    pre = pre!.next;
  }

  let rNode: ListNode | null = pre;
  for (let i = 0; i < right - left + 1; i++) {
    rNode = rNode!.next;
  }

  let lNode: ListNode | null = pre!.next;
  let cur: ListNode | null = rNode!.next;

  pre!.next = null;
  rNode!.next = null;

  reverseLinkedList(lNode);
  pre!.next = rNode;
  lNode!.next = cur;
  return dummy.next;
}

function reverseLinkedList(head): void {
  let pre = null;
  let temp;
  while (head) {
    temp = head.next;
    head.next = pre;
    pre = head;
    head = temp;
  }
}
