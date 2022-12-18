/**
 *  34. 在排序数组中查找元素的第一个和最后一个位置
 *  https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 *
 */

function searchRange(nums: number[], target: number): number[] {
  let left = getLeft(nums, target);
  let right = getRight(nums, target);

  return [left, right];
}

function getLeft(nums: number[], target: number): number {
  let L = 0;
  let R = nums.length;

  while (L < R) {
    const mid = Math.floor((L + R) / 2);

    if (nums[mid] === target) {
      R = mid;
    } else if (nums[mid] < target) {
      L = mid + 1;
    } else if (nums[mid] > target) {
      R = mid;
    }
  }

  if (nums[L] !== target) return -1;

  return L;
}

function getRight(nums: number[], target: number): number {
  let L = 0;
  let R = nums.length - 1;

  while (L < R) {
    const mid = Math.round((L + R) / 2);

    if (nums[mid] === target) {
      L = mid;
    } else if (nums[mid] < target) {
      L = mid;
    } else if (nums[mid] > target) {
      R = mid - 1;
    }
  }

  if (nums[R] !== target) return -1;

  return R;
}

console.log(searchRange([1, 1, 1, 8, 8, 8, 9], 8));

// console.log(Math.round((0 + 7) / 2));
