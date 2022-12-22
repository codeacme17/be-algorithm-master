/**
 *  剑指 Offer 04. 二维数组中的查找
 *  https://leetcode.cn/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
 *
 */

function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  if (!matrix || matrix.length === 0) return false;

  let m = matrix.length;
  let n = matrix[0].length;

  let row = 0;
  let col = n - 1;

  while (row < m && col >= 0) {
    if (matrix[row][col] > target) {
      col--;
    } else if (matrix[row][col] < target) {
      row++;
    } else {
      return true;
    }
  }

  return false;
}
