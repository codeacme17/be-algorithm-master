/**
 *  2625. Flatten Deeply Nested Array
 *  https://leetcode.com/problems/flatten-deeply-nested-array/
 *
 */

type MultiDimensionalArray = (number | MultiDimensionalArray)[]

var flat = function (
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  if (!n) return arr
  const res: (number | MultiDimensionalArray)[] = []

  for (let i = 0; i < arr.length; i++) {
    if (n > 0 && Array.isArray(arr[i]))
      res.push(...flat(arr[i] as MultiDimensionalArray, n - 1))
    else res.push(arr[i])
  }

  return res
}
