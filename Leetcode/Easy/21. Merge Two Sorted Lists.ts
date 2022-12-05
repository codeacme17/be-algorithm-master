/**
 *  21. 合并两个有序链表
 *  https://leetcode.com/problems/merge-two-sorted-lists/
 *
 *  思路：
 *  当list1和list2节点同时存在时，进入循环。
 *  比较当前两节点的 val 值，
 *  将较小的一个节点赋值给 temp.next节点，
 *  较小的一个节点向后退后一节，同时temp也向后退后一步
 *  退出遍历后，检查是否还有遗漏的节点，并赋值给 temp.next
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

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let head = new ListNode(-1, null);
  let temp = head;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      temp.next = list2;
      list2 = list2.next;
    } else {
      temp.next = list1;
      list1 = list1.next;
    }

    temp = temp.next;
  }
  temp.next = list1 || list2;

  return head.next;
}
