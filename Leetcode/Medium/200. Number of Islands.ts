/* 
  200. 岛屿数量
  https://leetcode.com/problems/number-of-islands/

*/

function numIslands(grid: string[][]): number {
  let res = 0
  const m = grid.length - 1
  const n = grid[0].length - 1

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (grid[i][j] === "1") {
        res++
        bfs(i, j)
      }
    }
  }

  function bfs(i: number, j: number): void {
    if (i < 0 || j < 0 || i > m || j > n) return
    if (grid[i][j] === "0") return

    grid[i][j] = "0"

    bfs(i - 1, j)
    bfs(i + 1, j)
    bfs(i, j - 1)
    bfs(i, j + 1)
  }

  return res
}
