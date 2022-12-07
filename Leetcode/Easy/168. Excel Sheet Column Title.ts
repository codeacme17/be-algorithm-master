/**
 *  168. Excel表列名称
 *  https://leetcode.com/problems/excel-sheet-column-title/
 *
 *  思路：
 *  将十进制转换为26进制
 *  进入循环，当 n > 0 表示没有转换完成，如果转换完成 n 一定会等于 0
 *  定义变量 remainder 表示 n % 26 的余数
 *
 *  Review
 *  2022.12.7 Soso - 只是能默写出来，原理模糊
 *
 */

function convertToTitle(n: number): string {
  if (n <= 0) return "";

  const character_offset = 64;
  let res = "";

  while (n > 0) {
    let remainder = n % 26 === 0 ? 26 : n % 26;
    n = (n - remainder) / 26;
    res = String.fromCharCode(character_offset + remainder) + res;
  }

  return res;
}

console.log(convertToTitle(52));
