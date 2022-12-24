/**
 *  88. 合并两个有序数组
 *  https://leetcode.com/problems/merge-sorted-array/
 *
 *  思路：
 *  本题因为是两个升序排列好的数组，所以就只需要比较最后两个索引所指的值的大小
 *  但需要注意的是边界条件，如果 m < n 则表示，循环完成后，num2 中还有值，
 *  所以需要继续遍历 num2，将其值赋予 nums1 中
 *
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (n === 0) return;

  let A = m - 1;
  let B = n - 1;
  let C = m + n - 1;

  while (B >= 0 && A >= 0) {
    if (nums1[A] <= nums2[B]) {
      nums1[C] = nums2[B];
      B--;
    } else {
      nums1[C] = nums1[A];
      A--;
    }
    C--;
  }

  while (B >= 0) {
    nums1[B] = nums2[B];
    B--;
  }
}
