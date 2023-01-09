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
  if (!head || !head.next || k == 1) return head

  // check if the linked list has at least k nodes
  let current: ListNode | null = head
  for (let i = 1; i <= k; i++) {
    if (!current) return head
    current = current.next
  }

  // reverse the first k nodes
  current = head
  let previous: ListNode | null = null
  for (let i = 0; i < k; i++) {
    let next = current!.next
    current!.next = previous
    previous = current
    current = next
  }

  // reverse the remaining nodes
  head.next = reverseKGroup(current, k)

  // return the kth node as the head of the modified linked list
  return previous
}
