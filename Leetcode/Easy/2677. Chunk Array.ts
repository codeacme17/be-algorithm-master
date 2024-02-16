/**
 *  2677. Chunk Array
 *  https://leetcode.com/problems/chunk-array/description/
 *
 */

function chunk(arr: any[], size: number): any[][] {
  let res: any[][] = []
  let temp: any[] = []

  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i])

    if (temp.length === size) {
      res.push(temp)
      temp = []
    }
  }

  if (temp.length) res.push(temp)

  return res
}
