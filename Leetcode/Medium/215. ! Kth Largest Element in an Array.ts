/**
 *  215. 数组中的第K个最大元素
 *  https://leetcode.com/problems/kth-largest-element-in-an-array/
 *
 *  ref: https://www.bilibili.com/video/BV1at411T75o/?spm_id_from=333.337.search-card.all.click
 *
 *  核心思路：快速选择
 *  其内核还是快速排序
 *  首先定义一个 pivot，
 *  确保每次递归的时候，左子序列都比 pivot 小，右子序列都比 pivot 大
 *  然后再对左侧和右侧的子序列进行排序
 *
 */

function findKthLargest(nums: number[], k: number): number {
  k = nums.length - k
  return quickSelect(nums, 0, nums.length - 1, k)
}

function quickSelect(nums: number[], start: number, end: number, k: number) {
  const mid = start + Math.floor((end - start) / 2)
  const pivot = nums[mid]
  let l = start
  let r = end

  while (l <= r) {
    while (nums[l] < pivot) l++
    while (nums[r] > pivot) r--

    if (l <= r) {
      swap(nums, l, r)
      l++
      r--
    }
  }

  if (k <= r) return quickSelect(nums, start, r, k)
  else if (k >= l) return quickSelect(nums, l, end, k)
  else return nums[mid]
}

function swap(nums: number[], p: number, q: number) {
  ;[nums[p], nums[q]] = [nums[q], nums[p]]
}
