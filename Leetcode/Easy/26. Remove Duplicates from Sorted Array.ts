/**
 *  26. 删除有序数组中的重复项
 *  https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 *
 */

function removeDuplicates(nums: number[]): number {
  if (nums.length <= 1) return nums.length;

  let slow = 0;
  let fast = 1;

  while (fast < nums.length) {
    if (nums[slow] !== nums[fast]) {
      slow++;
      nums[slow] = nums[fast];
    } else {
      fast++;
    }
  }
  return slow + 1;
}

console.log(removeDuplicates([1, 2, 2, 3]));
