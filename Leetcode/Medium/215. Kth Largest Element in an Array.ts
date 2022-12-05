/**
 *  215. 数组中的第K个最大元素
 *  https://leetcode.com/problems/kth-largest-element-in-an-array/
 *
 *
 */

function findKthLargest(nums: number[], k: number): number {
  return nums.sort((a, b) => a - b)[k - 1];
}

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
