/**
 *  Array Builtins I
 *  https://www.clientside.dev/problem/array-builtins-easy
 *
 */

// Given a list of objects,
// filter the list to only include objects whose
// property values match the given key-value pairs.

interface Obj extends Object {
  name?: String
  age?: number
}

function filterByKeyValue(arr: Array<Obj>, obj: Obj): Array<Obj> {
  let keys: string[] = Object.keys(obj)
  return arr.filter((item) => keys.every((key) => item[key] === obj[key]))
}

const arr = [
  { name: "John", age: 20 },
  { name: "Jane", age: 20 },
  { name: "John", age: 21 },
]

console.log(filterByKeyValue(arr, { name: "John" }))
// => [{name: "John", age: 20}, { name: "John", age: 21 }]

// filterByKeyValue(arr, { name: "John", age: 20 })
// filterByKeyValue(arr, { age: 20 })
