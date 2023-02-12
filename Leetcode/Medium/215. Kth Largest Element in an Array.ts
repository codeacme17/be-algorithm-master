/**
 *  215. 数组中的第K个最大元素
 *  https://leetcode.com/problems/kth-largest-element-in-an-array/
 *
 *  ref: https://www.bilibili.com/video/BV1at411T75o/?spm_id_from=333.337.search-card.all.click
 *
 */

function findKthLargest(nums: number[], k: number): number {
  sort(nums, 0, nums.length - 1)
  return nums[nums.length - k]
}

function sort(nums: number[], lo: number, hi: number): void {
  if (lo >= hi) return
  let p = partition(nums, lo, hi)
  sort(nums, lo, p - 1)
  sort(nums, p + 1, hi)
}

function partition(nums: number[], lo: number, hi: number): number {
  let pivot = nums[lo]
  let i = lo + 1
  let j = hi

  while (i <= j) {
    while (i < hi && nums[i] <= pivot) i++
    while (j > lo && nums[j] > pivot) j--
    if (i >= j) break
    swap(nums, i, j)
  }

  swap(nums, lo, j)
  return j
}

function swap(nums: number[], lo: number, hi: number): void {
  let temp = nums[lo]
  nums[lo] = nums[hi]
  nums[hi] = temp
}

findKthLargest([3, 1, 5, 6, 2], 0)
