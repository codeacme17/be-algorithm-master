/**
 *  234. 回文链表
 *  https://leetcode.com/problems/palindrome-linked-list/
 *
 *  思路：
 *  先使用快慢指针获取中间节点，
 *  再对节点为头的链表进行反转
 *  最后同时遍历比较 head 和 slow 的值是否相同
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

function isPalindrome(head: ListNode | null): boolean {
  if (head == null || head.next == null) return true;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast.next && fast.next.next) {
    slow = slow.next as typeof head;
    fast = fast.next.next;
  }

  slow.next = reverse(slow!.next);
  slow = slow.next;

  while (slow && head) {
    if (slow.val !== head.val) return false;
    slow = slow.next;
    head = head.next;
  }

  return true;
}

function reverse(head: ListNode | null): ListNode | null {
  let temp: ListNode | null;
  let pre: ListNode | null = null;

  while (head) {
    temp = head.next;
    head.next = pre;
    pre = head;
    head = temp;
  }

  return pre;
}
