/**
 *  2635. Apply Transform Over Each Element in Array
 *  https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/
 *
 */

function map(
  arr: number[],
  fn: (n: number, i: number) => number
): number[] {
  const res: number[] = []

  let index = 0
  for (let item of arr) {
    res.push(fn(item, index))
    index++
  }

  return res
}
