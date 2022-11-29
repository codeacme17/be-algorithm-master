/**
 *  141. 环形链表
 *  https://leetcode.cn/problems/linked-list-cycle/
 *
 *  思路：
 *  首先需要准备一个hash table来存储已遍历的Node
 *  遍历链表，如果遇到了set中不存在的Node则将其存入set中，
 *  如果遇到了set中的Node，则返回true，证明有自循环，
 *  循环结束，返回false
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

function hasCycle(head: ListNode | null): boolean {
  const set = new Set();

  while (head) {
    if (set.has(head)) return true;
    set.add(head);
    head = head.next;
  }

  return false;
}
