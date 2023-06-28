/**
 *  2629. Function Composition
 *  https://leetcode.com/problems/function-composition/description/
 *
 *  const fn = compose([x => x + 1, x => 2 * x])
 *  fn(4) // 9
 *
 */

type F = (x: number) => number

function compose(functions: F[]): F {
  return function (x) {
    if (!functions.length) return x

    for (let fn of functions.reverse()) x = fn(x)

    return x
  }
}
