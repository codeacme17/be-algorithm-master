/**
 *  剑指 Offer 22. 链表中倒数第k个节点
 *  https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
 *
 *  思路：
 *  维护一个 HashMap
 *  每次遍历 head 链表时，将 index 作为键，当前链表作为值，存入 HashMap 中
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

function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  let map = new Map<number, ListNode>();
  let index: number = 1;
  while (head) {
    map.set(index, head);
    head = head.next;
    index++;
  }
  return map.get(index - k) as ListNode;
}

// function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
//   let p1: ListNode | null = head;
//   for (let i = 0; i < k; i++) {
//     p1 = p1?.next as ListNode;
//   }

//   let p2: ListNode | null = head;
//   while (p1) {
//     p2 = p2?.next as ListNode;
//     p1 = p1.next;
//   }

//   return p2;
// }
