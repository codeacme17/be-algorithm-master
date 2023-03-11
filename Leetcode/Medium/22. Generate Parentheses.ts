/**
 *  22. 括号生成
 *  https://leetcode.com/problems/generate-parentheses/
 *
 */

function generateParenthesis(n: number): string[] {
  let res: string[] = []
  let track: string = ""

  function backtrack(track: string, open: number, close: number): void {
    if (open > n || close > n || close > open) return
    if (track.length === n * 2 && open === n && close === n) {
      res.push(track)
      return
    }

    backtrack(track + "(", open + 1, close)
    backtrack(track + ")", open, close + 1)
  }

  backtrack(track, 0, 0)
  return res
}
