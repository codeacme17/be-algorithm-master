/**
 *  153. 寻找旋转排序数组中的最小值
 *  https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 *
 */

function findMin(nums: number[]): number {
  let L = 0;
  let R = nums.length - 1;

  while (L < R) {
    const mid = Math.floor((L + R) / 2);

    if (nums[mid] < nums[R]) {
      R = mid;
    } else {
      L = mid + 1;
    }
  }

  return nums[L];
}
