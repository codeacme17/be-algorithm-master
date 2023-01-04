/**
 *  25. K 个一组翻转链表
 *  https://leetcode.com/problems/reverse-nodes-in-k-group/description/
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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let n = 0
  let i = head
  while (i) {
    n++
    i = i.next
  }

  let dummy = new ListNode(-1)
  dummy.next = head

  for (let pre = dummy, tail = head; n >= k; n -= k) {
    for (let i = 1; i < k; i++) {
      let temp = tail?.next?.next
      tail!.next!.next = pre.next
      pre.next = tail?.next as ListNode | null
      tail!.next = temp as ListNode | null
    }
    pre = tail!
    tail = tail!.next
  }

  return dummy.next
}
