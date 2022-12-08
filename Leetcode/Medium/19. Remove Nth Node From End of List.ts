/**
 *  19. 删除链表的倒数第 N 个结点
 *  https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 *
 *  思路：
 *  本题是 “剑指 Offer 22. 链表中倒数第k个节点” 一个升级版本
 *  该题有一个边界问题，是因为我们会拿 n+1 作为查找节点传入 findNthList 函数
 *  如果此时的 n 正好是 n 也就是 第一个节点，就会出现 p = null 但循环未结束的情况，
 *  所以 dummy 需要多出一个空白节点头，以避免这种情况出现
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let x = findNthList(dummy, n + 1);
  x!.next = x!.next!.next;
  return dummy.next;
}

function findNthList(dummy: ListNode | null, n: number): ListNode | null {
  let p1 = dummy;
  for (let i = 0; i < n; i++) {
    p1 = p1!.next;
  }

  let p2 = dummy;
  while (p1) {
    p1 = p1.next;
    p2 = p2!.next;
  }
  return p2;
}
