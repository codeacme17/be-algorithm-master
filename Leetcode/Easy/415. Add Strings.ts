/**
 *  415. 字符串相加
 *  https://leetcode.com/problems/add-strings/
 *
 *  思路:
 *  类似于题2. Add Two Numbers，不过要从尾部作为索引头进行遍历
 *
 */

function addStrings(num1: string, num2: string): string {
  let p1 = num1.length - 1
  let p2 = num2.length - 1
  let carry = 0
  let res: number[] = []

  while (p1 >= 0 || p2 >= 0 || carry) {
    const v1 = Number(num1[p1]) || 0
    const v2 = Number(num2[p2]) || 0
    const sum = v1 + v2 + carry
    carry = Math.floor(sum / 10)
    res.push(sum % 10)
    p1--
    p2--
  }

  return res.reverse().join("")
}

console.log(addStrings("11", "123"))
