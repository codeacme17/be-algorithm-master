/**
 *  2626. Array Reduce Transformation
 *  https://leetcode.com/problems/array-reduce-transformation/description/
 *
 */

type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
  let n = nums.length
  let val = init

  if (!n) return val

  for (let i = 0; i < n; i++) {
    val = fn(val, nums[i])
  }

  return val
}
