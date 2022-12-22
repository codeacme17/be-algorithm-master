/**
 *  303. 区域和检索 - 数组不可变
 *  https://leetcode.com/problems/range-sum-query-immutable/
 *
 */

// 前缀和
class NumArray1 {
  nums: number[];
  preNums: number[] = [];

  constructor(nums: number[]) {
    this.nums = nums;
  }

  sumRange(left: number, right: number): number {
    this.preNums[0] = 0;

    for (let i = 0; i < this.nums.length; i++) {
      this.preNums[i + 1] = this.preNums[i] + this.nums[i];
    }

    return this.preNums[right + 1] - this.preNums[left];
  }
}

// ===
class NumArray2 {
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

const n = new NumArray1([1, 2, 3]);
console.log(n.sumRange(1, 2));
