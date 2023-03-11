/**
 *  46. 全排列
 *  https://leetcode.com/problems/permutations/description/
 *
 */

function permute(nums: number[]): number[][] {
  let res: number[][] = []
  let track: number[] = []

  // 回溯算法
  function backtrack(nums: number[], track: number[]): void {
    // 如果 track 路径上所存储的数量与 nums 相同，则代表完成了一条路径
    if (track.length === nums.length) {
      res.push([...track])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      // 如果当前的数在这条路径中读取过，则跳过当前的子路径
      if (track.indexOf(nums[i]) !== -1) continue

      track.push(nums[i])
      backtrack(nums, track)
      track.pop()
    }
  }

  backtrack(nums, track)
  return res
}
