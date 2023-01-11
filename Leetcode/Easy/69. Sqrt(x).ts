/**
 *  69. x 的平方根
 *  https://leetcode.com/problems/sqrtx/
 *
 */

function mySqrt(x: number): number {
  let l = 1
  let r = x

  while (l <= r) {
    const mid = Math.floor((l + r) / 2)

    if (mid <= x / mid) {
      if (mid + 1 > x / (mid + 1)) return mid
      else l = mid + 1
    } else r = mid - 1
  }

  return 0
}

console.log(mySqrt(1))
