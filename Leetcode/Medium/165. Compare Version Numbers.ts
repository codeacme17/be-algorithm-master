/**
 *  165. 比较版本号
 *  https://leetcode.com/problems/compare-version-numbers/
 *
 */

function compareVersion(version1: string, version2: string): number {
  const v1: string[] = version1.split(".")
  const v2: string[] = version2.split(".")
  const length = Math.max(v1.length, v2.length)

  for (let i = 0; i < length; i++) {
    if (Number(v1[i]) || 0 > Number(v2[i]) || 0) return 1
    if (Number(v1[i]) || 0 < Number(v2[i]) || 0) return -1
  }

  return 0
}
