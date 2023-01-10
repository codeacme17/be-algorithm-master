/**
 *  384. 打乱数组
 *  https://leetcode.com/problems/shuffle-an-array/
 *
 *  思路：
 *  这是一个以 [洗牌算法] 为解决方法的题
 *
 *  [洗牌算法]
 *  - O(n)
 *  - 准则：产生的结果必须有 n! 种可能
 *    - 对于 nums[0]，我们把它随机换到了索引 [0, n) 上，共有 n 种可能性
 *    - 对于 nums[1]，我们把它随机换到了索引 [1, n) 上，共有 n - 1 种可能性
 *
 */

class Solution {
  private nums: number[]

  constructor(nums: number[]) {
    this.nums = nums
  }

  public reset(): number[] {
    return this.nums
  }

  public shuffle(): number[] {
    let n = this.nums.length
    let shuffled = this.nums.slice()

    for (let i = 0; i < n; i++)
      this.swap(shuffled, i, Math.floor(Math.random() * n))

    return shuffled
  }

  private swap(arr: number[], i: number, j: number): void {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
}
