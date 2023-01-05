/**
 *  912. 排序数组
 *  https://leetcode.com/problems/sort-an-array/description/
 *
 *  思路：
 *  这道题的解题思路是使用 "归并排序" 的算法
 *  归并排序其实就是二叉树后序遍历的一个演变
 *  而 [lo...mid] 和 [mid+1...hi] 就是左右子树
 *  merge 方法就是将排序好的左子树和右子树进行排序合并
 *
 */

function sortArray(nums: number[]): number[] {
  if (nums.length <= 1) return nums

  let mid = Math.floor(nums.length / 2)
  let left = sortArray(nums.slice(0, mid))
  let right = sortArray(nums.slice(mid))

  return merge(left, right)
}

function merge(arr1: number[], arr2: number[]): number[] {
  let res: number[] = []
  let p = 0
  let q = 0

  while (p < arr1.length && q < arr2.length) {
    if (arr1[p] < arr2[q]) res.push(arr1[p++])
    else res.push(arr2[q++])
  }

  while (p < arr1.length) res.push(arr1[p++])
  while (q < arr2.length) res.push(arr2[q++])

  return res
}

console.log(sortArray([2, 3, 5, 1, 23, 4]))
