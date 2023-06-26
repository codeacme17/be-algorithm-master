/**
 *  2623. Memoize
 *  https://leetcode.com/problems/memoize/description/
 *
 *
 *  let callCount = 0;
 *  const memoizedFn = memoize(function (a, b) {
 *  	 callCount += 1;
 *    return a + b;
 *  })
 *  memoizedFn(2, 3) // 5
 *  memoizedFn(2, 3) // 5
 *  console.log(callCount) // 1
 *
 */

type Fn = (...params: any) => any

function memoize(fn: Fn): Fn {
  const cache = new Map()

  return function (...args) {
    let index = 0
    let key = ''

    while (index < args.length) {
      key = key + '-' + args[index]
      index++
    }

    if (cache.has(key)) return cache.get(key)

    const res = fn(...args)
    cache.set(key, res)
    return res
  }
}
