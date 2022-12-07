/**
 *  303. 区域和检索 - 数组不可变
 *  https://leetcode.com/problems/range-sum-query-immutable/
 *
 */

class NumArray {
  nums: number[];

  constructor(nums: number[]) {
    this.nums = nums;
  }

  sumRange(left: number, right: number): number {
    let sum = 0;
    for (let i = left; i <= right; i++) {
      sum += this.nums[i];
    }
    return sum;
  }
}

const n = new NumArray([1, 2, 3]);
console.log(n.sumRange(1, 2));
