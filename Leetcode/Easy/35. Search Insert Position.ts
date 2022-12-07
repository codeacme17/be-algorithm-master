/**
 *  35. 搜索插入位置
 *  https://leetcode.com/problems/search-insert-position/
 *
 *  思路：
 *  遍历数组，创建判定条件
 *  1. 如果当前值等于目标值，则返回当前索引
 *  2. 如果不存在，则进行比较左右大小进行插入
 *
 *  Review:
 *  2022.12.6 Soso
 *
 */

function searchInsert(nums: number[], target: number): number {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    // Existed
    if (nums[i] === target) result = i;

    // Insert
    if (nums[i - 1] < target && target < nums[i]) result = i;
    if (nums[nums.length - 1] < target) result = i + 1;
  }

  return result;
}

console.log(searchInsert([3, 5, 7], 4));
