/**
 *  18. 四数之和
 *  https://leetcode.com/problems/4sum/
 *
 */

function fourSum(nums: number[], target: number): number[][] {
  let res: number[][] = []
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    let threeRes: number[][] = threeSum(nums, i + 1, target - nums[i])
    for (let t of threeRes) {
      t.unshift(nums[i])
      res.push(t)
    }
    while (i < nums.length - 1 && nums[i] == nums[i + 1]) i++
  }
  return res
}

function threeSum(nums: number[], start: number, target: number): number[][] {
  let res: number[][] = []
  let l: number = start + 1
  let r: number = nums.length - 1
  for (let i = start; i < nums.length; i++) {
    if (nums[i] > target) break
    if (i > start && nums[i] === nums[i - 1]) continue
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      if (sum === target) {
        res.push([nums[i], nums[l], nums[r]])
        while (l < r && nums[l] === nums[l + 1]) l++
        while (l < r && nums[r] === nums[r - 1]) r--
        l++
        r--
      } else if (sum > target) r--
      else l++
    }
  }
  return res
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
