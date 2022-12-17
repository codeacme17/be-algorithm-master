/**
 *  15. 三数之和
 *  https://leetcode.cn/problems/3sum/
 *
 *  思路：
 *  有两点，在这个算法中极为重要
 *  1. 将原数组进行排序，可以去重
 *  2. 去重，需要在每次移动任意指针的时候，进行去重判断
 *
 */

function threeSum(nums: number[]): number[][] {
  let res: any = [];
  if (nums.length < 3 || !nums) return [];
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      } else if (sum < 0) l++;
      else if (sum > 0) r--;
    }
  }

  return res;
}
