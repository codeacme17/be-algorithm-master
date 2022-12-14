/**
 *  167. 两数之和 II - 输入有序数组
 *  https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 *
 *  思路：
 *  左右指针，分别指向数组两端
 *  当 left < right 时，进入循环
 *  如果两指针所指值相加与目标相同，则返回结果
 *  因为条件给的是 “non-decreasing array" 所以可以保证左指针的值一定小于右指针
 *  所以就可以判断：
 *  当和小于目标是，将左指针向右移，即增加和的大小
 *  反之则右指针向左移
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
