/**
 *  33. 搜索旋转排序数组
 *  https://leetcode.com/problems/search-in-rotated-sorted-array/
 *
 */

function search(nums: number[], target: number): number {
  let L = 0;
  let R = nums.length - 1;

  while (L <= R) {
    const mid = Math.floor((L + R) / 2);

    if (nums[mid] === target) return mid;

    if (nums[L] > nums[R]) {
      if (nums[mid] < nums[L]) {
        if (target > nums[mid] && target < nums[L]) L = mid + 1;
        else R = mid - 1;
      } else {
        if (target < nums[mid] && target > nums[R]) R = mid - 1;
        else L = mid + 1;
      }
    } else if (target < nums[mid]) {
      R = mid - 1;
    } else {
      L = mid + 1;
    }
  }

  return -1;
}

console.log(search([4, 5, 6, 7, 8, 0, 1, 2], 8));
