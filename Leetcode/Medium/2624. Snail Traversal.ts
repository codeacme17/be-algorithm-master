/**
 *  2624. Snail Traversal
 *  https://leetcode.com/problems/snail-traversal/description/
 *
 *  const arr = [1,2,3,4];
 *  arr.snail(1,4); // [[1,2,3,4]]
 *
 */

interface Array<T> {
  snail(rowsCount: number, colsCount: number): number[][]
}

Array.prototype.snail = function (
  rows: number,
  cols: number
): number[][] {
  if (rows * cols !== this.length) return []

  const res: number[][] = Array(rows)
    .fill([])
    .map(() => [])

  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      const index = c & 1 ? rows - r - 1 : r
      const item = this[c * rows + r]

      res[index].push(item)
    }
  }

  return res
}
