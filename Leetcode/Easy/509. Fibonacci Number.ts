/**
 *  509. 斐波那契数
 *  https://leetcode.com/problems/fibonacci-number/
 *
 */

function fib(n: number): number {
  let memo = []
  return fibCount(n, memo)
}

function fibCount(n: number, memo: number[]): number {
  if (n === 0 || n === 1) return n

  if (!memo[n]) memo[n] = fibCount(n - 1, memo) + fibCount(n - 2, memo)
  return memo[n]
}
