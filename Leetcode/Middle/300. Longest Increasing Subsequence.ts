/**
 *  300. 最长递增子序列
 *  https://leetcode.cn/problems/longest-increasing-subsequence/
 *
 *
 */

function lengthOfLIS(nums: number[]): number {
  let dp: number[] = new Array(nums.length);
  let max: number = 1;

  dp[0] = 1;

  for (let i = 1; i < nums.length; i++) {
    dp[i] = 1;

    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }

    max = Math.max(max, dp[i]);
  }

  return max;
}

console.log(lengthOfLIS([10, 0, 1, 0, 3, 2, 3]));
