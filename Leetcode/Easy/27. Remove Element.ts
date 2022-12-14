/**
 *  27. 移除元素
 *  https://leetcode.com/problems/remove-element/
 *
 */

function removeElement(nums: number[], val: number): number {
  let slow = 0;
  let fast = 0;

  while (fast < nums.length) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }

  return slow;
}

console.log(removeElement([3, 2, 2, 3], 3));
