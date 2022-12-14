/**
 *  344. 反转字符串
 *  https://leetcode.com/problems/reverse-string/
 *
 */

function reverseString(s: string[]): void {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    let temp = s[l];
    s[l] = s[r];
    s[r] = temp;
    l++;
    r--;
  }
}
