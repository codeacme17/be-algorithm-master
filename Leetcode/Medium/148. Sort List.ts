/**
 *  148. 排序链表
 *  https://leetcode.com/problems/sort-list/
 *
 *  思路：
 *  1. 使用快慢指针找到链表的中点，以中点为分界，将链表拆分成两个子链表。
 *  2. 对两个子链表分别排序，将两个排序后的子链表合并，得到完整的排序后的链表，
 *     使用「21. 合并两个有序链表」的做法合并。
 *
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function sortList(head: ListNode | null): ListNode | null {
  return cut(head, null)
}

function cut(head, tail) {
  if (head === null) {
    return head
  }
  if (head.next === tail) {
    head.next = null
    return head
  }

  let slow = head
  let fast = head
  while (fast !== tail) {
    fast = fast.next
    slow = slow.next
    if (fast !== tail) {
      fast = fast.next
    }
  }

  const mid = slow
  return merge(cut(head, mid), cut(mid, tail))
}

function merge(head1, head2) {
  let dummy = new ListNode(-1)
  let temp: ListNode | null = dummy,
    temp1 = head1,
    temp2 = head2

  while (temp1 && temp2) {
    if (temp1.val > temp2.val) {
      temp!.next = temp2
      temp2 = temp2.next
    } else {
      temp!.next = temp1
      temp1 = temp1.next
    }
    temp = temp!.next
  }

  temp!.next = temp1 || temp2

  return dummy.next
}
