/**
 *  4. 四数之和
 *  https://leetcode.com/problems/4sum/
 *
 */

function fourSum(nums: number[], target: number): number[][] {
  let res: number[][] = []
  let length = nums.length
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < length; i++) {
    let triple = treeSum(nums, i + 1, target - nums[i])
    res.push([nums[i], ...triple])
  }
  return res
}

function treeSum(nums: number[], start: number, target: number): number[] {
  let res: number[] = []
  let length = nums.length
  for (let i = start; i < length; i++) {
    if (nums[i] > target) break
    if (i > target && nums[i] === nums[i - 1]) continue
    let l = i + 1,
      r = length - 1
    while (l < r) {
      let sum = nums[l] + nums[r] + nums[i]
      if (sum === target) {
        res = [nums[i], nums[l], nums[r]]
        while (l < r && nums[l] === nums[l + 1]) l++
        while (l < r && nums[r] === nums[r - 1]) r--
        l++
        r--
      } else if (sum < target) l++
      else r--
    }
  }
  return res
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
