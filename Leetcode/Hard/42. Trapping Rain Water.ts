/**
 *  42. Trapping Rain Water
 *  https://leetcode.com/problems/trapping-rain-water/description/
 *
 *  思路：
 *  双指针方法来解题
 *  https://labuladong.github.io/algo/di-san-zha-24031/jing-dian--a94a0/ru-he-gao--0d5eb/
 */

function trap(height: number[]): number {
  let res = 0

  let l = 0
  let r = height.length - 1

  let lMax = 0 // 记录 [0, l] 的最大值，也就是左侧最高的柱子
  let rMax = 0 // 记录 [r, height.length -1] 的最大值，右侧最高的柱子

  while (l < r) {
    if (lMax < rMax) {
      // 当当前左侧最大值小于右侧最大值，则表示需要以左侧最大值为对比柱子来接雨
      // 因为，当不论右侧柱子有多高，都没有意义，水会溢出
      res += lMax - height[l]
      l++
    } else {
      res += rMax - height[r]
      r--
    }
  }

  return res
}
