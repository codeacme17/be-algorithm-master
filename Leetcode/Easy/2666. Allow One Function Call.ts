/**
 *  2666. Allow One Function Call
 *  https://leetcode.com/problems/allow-one-function-call/
 *
 *  let fn = (a,b,c) => (a + b + c)
 *  let onceFn = once(fn)
 *  onceFn(1,2,3); // 6
 *  onceFn(2,3,6); // returns undefined without calling fn
 *
 */

type Fn = (...args: any[]) => any

function once(fn: Fn): Fn {
  let isCalled = false

  return function (...args) {
    if (isCalled) return
    isCalled = true
    return fn(...args)
  }
}
