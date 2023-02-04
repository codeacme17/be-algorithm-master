/**
 *  283.  移动零
 *  https://leetcode.com/problems/move-zeroes/
 *
 *  思路：
 *  需要一个指针i,和一个变量zeroLength来存储已移动的零的个数
 *  我们只循环没有被移动的长度，即nums.length - zeroLength
 *  接下来，进入判断
 *  如果当前的数字是0，则移除该元素，并在数组末端加入0，并且将zeroLength+1
 *  如果不是0，则讲i+1
 *
 */

function moveZeroes(nums: number[]): void {
  let i = 0
  let zeroLength = 0
  while (i < nums.length - zeroLength) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
      zeroLength++
    } else {
      i++
    }
  }
}

moveZeroes([0, 0, 1, 0, 0])
