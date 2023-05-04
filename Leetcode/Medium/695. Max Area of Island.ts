/**
 *  695. 岛屿的最大面积
 *  https://leetcode.com/problems/max-area-of-island/
 *
 */

function maxAreaOfIsland(grid: number[][]): number {
  const row = grid.length
  const col = grid[0].length
  const lands: number[] = []
  let index = 0

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        lands[index] = 0
        dfs(i, j)
        index++
      }
    }
  }

  function dfs(i: number, j: number): void {
    if (i < 0 || j < 0 || i >= row || j >= col) return
    if (grid[i][j] === 0) return

    lands[index] += 1
    grid[i][j] = 0

    dfs(i - 1, j)
    dfs(i + 1, j)
    dfs(i, j - 1)
    dfs(i, j + 1)
  }

  return lands.length ? Math.max.apply(null, lands) : 0
}

const grid1 = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
]

const grid2 = [[0, 0, 0, 0, 0, 0, 0, 0]]

console.log(maxAreaOfIsland(grid2))
