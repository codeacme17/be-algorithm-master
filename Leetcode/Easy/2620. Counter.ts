/**
 *  2620. Counter
 *  https://leetcode.com/problems/counter/description/
 *
 *
 *  const counter = createCounter(10)
 *  counter() // 10
 *  counter() // 11
 *  counter() // 12
 *
 */

function createCounter(n: number): () => number {
  return function () {
    return n++
  }
}
