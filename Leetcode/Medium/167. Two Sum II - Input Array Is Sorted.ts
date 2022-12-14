/**
 *  167. 两数之和 II - 输入有序数组
 *  https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 *
 */

function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    else if (sum < target) left++;
    else if (sum > target) right--;
  }

  return [-1, -1];
}

console.log(twoSum([2, 7, 11, 15], 9));
