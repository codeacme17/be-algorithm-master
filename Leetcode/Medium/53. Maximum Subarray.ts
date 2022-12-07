/**
 *  53. 最大子数组和
 *  https://leetcode.com/problems/maximum-subarray/
 *
 *  思路：
 *  动态规划，dp[i] 表示 0->i 的和
 *  当 dp[i-1] <= 0 时，可以直接将之前的 sum 更改为 i
 *  这是因为，如果 dp[i-1] <= 0 时与 i 相加都不会比 i 本身大
 *  最后定义一个 max 来维护每次遍历的最大值
 *
 */

function maxSubArray(nums: number[]): number {
  let sum = 0;
  let max = nums[0];

  for (const num of nums) {
    if (sum > 0) sum += num;
    else sum = num;

    max = Math.max(sum, max);
  }

  return max;
}

console.log(maxSubArray([1, 3, -2, 3]));
