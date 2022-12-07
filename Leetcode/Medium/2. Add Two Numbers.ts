/**
 *  2. 两数相加
 *  https://leetcode.com/problems/add-two-numbers/
 *
 *  思路：
 *  两个链表可以看作两个从个位数开始的正整数
 *  2 -> 4 -> 3 = 342
 *  5 -> 6 -> 4 = 564
 *  创建一个 carry 变量，来存储两数相加时超出0的部分（其实也就是0或1）
 *  进入循环，循环的条件是当 l1,l2,carry 有一个存在时
 *  let v1: number = l1?.val ? l1.val : 0;
 *  let v2: number = l2?.val ? l2.val : 0;
 *  分表表示当一个链表无值的时候，将其值默认置为0
 *
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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let res: ListNode = new ListNode(0, null);
  let temp: ListNode = res;
  let carry: number = 0;

  while (l1 || l2 || carry) {
    let v1: number = l1?.val ? l1.val : 0;
    let v2: number = l2?.val ? l2.val : 0;
    let sum = v1 + v2 + carry;
    carry = Math.floor(sum / 10);
    l1 = l1?.next as any;
    l2 = l2?.next as any;
    temp.next = new ListNode(sum % 10);
    temp = temp.next;
  }

  return res.next;
}
