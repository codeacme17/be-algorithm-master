/**
 *  704. 二分查找
 *  https://leetcode.com/problems/binary-search/
 *
 */

function search(nums: number[], target: number): number {
  let L = 0;
  let R = nums.length - 1;

  while (L <= R) {
    const mid = Math.floor((L + R) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      L = mid + 1;
    } else if (nums[mid] > target) {
      R = mid - 1;
    }
  }

  return -1;
}

console.log(search([1, 2, 3, 4, 5], 5));
