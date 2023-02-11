/**
 *  3. 无重复字符的最长子串
 *  https://leetcode.com/problems/longest-substring-without-repeating-characters
 *
 */

function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0
  if (s.length === 1) return 1
  let res: number = 0
  let set = new Set()
  let p = 0

  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[p])
      p++
    }
    set.add(s[i])
    res = Math.max(res, i - p + 1)
  }
  return res
}

console.log(lengthOfLongestSubstring("pwwkew"))
