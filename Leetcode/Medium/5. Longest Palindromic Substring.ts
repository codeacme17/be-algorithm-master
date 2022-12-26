/**
 *  5. 最长回文子串
 *  https://leetcode.com/problems/longest-palindromic-substring/
 *
 *  思路：
 *  遍历字符串，将每个字符串作为中心，
 *  创建两个指针，并从该中心向两边扩散
 *  注意：
 *  字符串的长度可能是奇数，也可能是偶数
 *  所以 l = r = i 表示奇数，
 *  l = i, r = i + 1 表示偶数，
 *  再进行扩散比较
 *
 */

function longestPalindrome(s: string): string {
  let res = "";

  for (let i = 0; i < s.length; i++) {
    let s1 = palindrome(s, i, i);
    let s2 = palindrome(s, i, i + 1);
    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
  }

  return res;
}

function palindrome(s: string, l: number, r: number): string {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--;
    r++;
  }
  return s.substring(l + 1, r);
}

console.log(longestPalindrome("babad"));
