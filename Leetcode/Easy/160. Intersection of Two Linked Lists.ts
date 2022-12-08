/**
 *  160. 相交链表
 *  https://leetcode.com/problems/intersection-of-two-linked-lists/
 *
 *  思路：
 *  这个问题的难点是我们无法用一个索引同时遍历两条链表，
 *  因为两条链表的长度是不一定相同的，
 *  所以需要解决的问题就是使得这两条链表 ”相同“
 *  定义两个指针分别指向两条链表
 *  进入循环，循环条件是指针1不等于指针2，因为如果存在相同链表则表示相交
 *  然后开始遍历，p1遍历完链表1后再对链表2进行遍历，p2也同理，
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

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let p1 = headA;
  let p2 = headB;

  while (p1 !== p2) {
    if (!p1) p1 = headB;
    else p1 = p1.next;

    if (!p2) p2 = headA;
    else p2 = p2.next;
  }

  return p1;
}

// function getIntersectionNode(
//   headA: ListNode | null,
//   headB: ListNode | null
// ): ListNode | null {
//   let set = new Set<ListNode>();
//   while (headA) {
//     set.add(headA);
//     headA = headA.next;
//   }
//   while (headB) {
//     if (set.has(headB)) return headB;
//     headB = headB.next;
//   }
//   return null;
// }
