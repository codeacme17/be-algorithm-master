/**
 *  96. 不同的二叉搜索树
 *  https://leetcode.com/problems/unique-binary-search-trees/description/
 *
 */

function numTrees(n: number): number {
  const memo: number[][] = new Array(n).fill(null).map(() => new Array(n))
  return count(1, n)

  function count(lo: number, hi: number): number {
    if (lo >= hi) return 1
    if (memo[lo][hi]) return memo[lo][hi]

    let res = 0
    for (let mid = lo; mid <= hi; mid++) {
      let left = count(lo, mid - 1)
      let right = count(mid + 1, hi)
      res += left * right
    }

    memo[lo][hi] = res
    return res
  }
}
