/**
 *  322. 零钱兑换
 *  https://leetcode.com/problems/coin-change/
 *
 */

function coinChange(coins: number[], amount: number): number {
  let res = sub(coins, amount)
  return res === Infinity ? -1 : res
}

function sub(coins: number[], amount: number, memo: number[] = []): number {
  if (amount === 0) return 0
  if (amount < 0) return Infinity
  if (memo[amount]) return memo[amount]

  let min = Infinity

  for (let coin of coins) {
    min = Math.min(sub(coins, amount - coin, memo) + 1, min)
  }

  memo[amount] = min
  return memo[amount]
}
