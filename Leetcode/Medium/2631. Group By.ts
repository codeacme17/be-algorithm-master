/**
 *  2631. Group By
 *  https://leetcode.com/problems/group-by/description/
 *
 *  [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 *
 */

declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
  }
}

Array.prototype.groupBy = function (fn: any) {
  const res = {}

  for (let item of this) {
    const key = fn(item)

    if (!res[key]) res[key] = []

    res[key].push(item)
  }

  return res
}
