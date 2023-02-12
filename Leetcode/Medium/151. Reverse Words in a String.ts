/**
 *  151. 翻转字符串里的单词
 *  https://leetcode.com/problems/reverse-words-in-a-string
 *
 */

function reverseWords(s: string): string {
  let sa = s.trim().split(" ")
  let res: string[] = []
  let p = sa.length - 1

  while (p >= 0) {
    if (sa[p] !== " ") res.push(sa[p])
    p--
  }

  return res.join(" ")
}
