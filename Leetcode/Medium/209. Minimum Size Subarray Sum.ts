/**
 *  209. 长度最小的子数组
 *  https://leetcode.com/problems/minimum-size-subarray-sum/description/
 *
 */

function minSubArrayLen(target: number, nums: number[]): number {
  let l = 0
  let r = 0
  let sum = 0
  let res = Infinity

  while (r < nums.length) {
    sum += nums[r]

    while (sum >= target) {
      res = Math.min(res, r - l + 1)
      sum -= nums[l]
      l++
    }

    r++
  }

  return res === Infinity ? 0 : res
}

console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]))
