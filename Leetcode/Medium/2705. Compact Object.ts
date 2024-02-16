/**
 * 2705. Compact Object
 * https://leetcode.com/problems/compact-object/description/
 *
 */

type Obj = Record<string, any> | Array<any>

function compactObject(obj: Obj): Obj {
  // If obj is Array, recursion the obj
  if (Array.isArray(obj))
    return obj
      .map((item: Obj) => compactObject(item))
      .filter((item: Obj) => !!item)
  // If obj is Objcet, recursion the obj with the key
  else if (typeof obj === 'object' && obj !== null) {
    const result: Record<string, any> = {}
    for (const key in obj) {
      const val = compactObject(obj[key])
      if (!!val) result[key] = val
    }
    return result
  } else return obj
}
