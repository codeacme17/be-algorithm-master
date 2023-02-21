/**
 *  35. 搜索插入位置
 *  https://leetcode.com/problems/search-insert-position/
 *
 *  思路：二分查找
 *  当 L === R 的时候，表示没有数组中不存在 target
 *  返回 L 即代表要插入的位置
 *
 */

function searchInsert(nums: number[], target: number): number {
  let L = 0
  let R = nums.length - 1

  while (L <= R) {
    let M = Math.floor((L + R) / 2)

    if (nums[M] === target) return M
    if (nums[M] < target) L = M + 1
    else R = M - 1
  }

  return L
}

console.log(searchInsert([3, 5, 7], 4))
