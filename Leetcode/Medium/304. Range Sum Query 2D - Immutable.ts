/**
 *  304. 二维区域和检索 - 矩阵不可变
 *  https://leetcode.com/problems/range-sum-query-2d-immutable/
 *
 */

class NumMatrix {
  matrix: number[][];
  preSum: number[][];

  constructor(matrix: number[][]) {
    this.matrix = matrix;
    this.preSum = new Array(this.matrix.length + 1)
      .fill(0)
      .map((val) => new Array(matrix[0].length + 1).fill(0));

    let m = this.matrix.length,
      n = this.matrix[0].length;

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        this.preSum[i][j] =
          this.preSum[i - 1][j] +
          this.preSum[i][j - 1] +
          this.matrix[i - 1][j - 1] -
          this.preSum[i - 1][j - 1];
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    return (
      this.preSum[row2 + 1][col2 + 1] -
      this.preSum[row1][col2 + 1] -
      this.preSum[row2 + 1][col1] +
      this.preSum[row1][col1]
    );
  }
}

const n = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
]);

console.log(n.sumRegion(2, 1, 4, 3));
