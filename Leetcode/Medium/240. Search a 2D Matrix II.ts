/**
 *  240. 搜索二维矩阵 II
 *  https://leetcode.com/problems/search-a-2d-matrix-ii/
 *
 */

// Z Search ---- O(m + n)
function searchMatrix1(matrix: number[][], target: number): boolean {
  let m = matrix.length;
  let n = matrix[0].length;

  let x = 0;
  let y = n - 1;

  while (x < m && y >= 0) {
    if (matrix[x][y] === target) return true;
    if (matrix[x][y] > target) y--;
    else x++;
  }

  return false;
}

// Binary Search Solution ----- O(m*log(n))
function searchMatrix2(matrix: number[][], target: number): boolean {
  for (let i = 0; i < matrix.length; i++) {
    if (binarySearch(matrix[i], target)) return true;
  }

  return false;
}

function binarySearch(nums: number[], target: number): boolean {
  let L = 0;
  let R = nums.length - 1;

  while (L <= R) {
    const mid = Math.floor((L + R) / 2);

    if (nums[mid] === target) return true;
    else if (nums[mid] < target) L = mid + 1;
    else if (nums[mid] > target) R = mid - 1;
  }

  return false;
}
