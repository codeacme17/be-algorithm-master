/**
 *  121. 买卖股票的最佳时机
 *  https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 *
 *  思路：
 *  其实这道题目就是要获取到数组中最大和最小的两个数，
 *  只是最大的数一定要在最小的数右边才可以。
 *  主要思想，就是拿到以当前遍历到的最小元素作为起始的数组中的最大差值
 *
 *  所以我们定义两个指针 left 和 right 指向 [0] 和 [1]
 *  然后进入循环，如果 left < right 就进入比较获取最大差值，并不移动 left
 *  这时候我们就可以拿到以当前 left 为起始的数组中最大差值
 *  最后再对每一段进行比较
 *
 *  Review
 *  2022.12.7 Bad - 没思路
 *
 */

function maxProfit(prices: number[]): number {
  let max = 0;
  let left = 0;
  let right = 1;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      max = Math.max(max, profit);
    } else {
      left = right;
    }
    right++;
  }

  return max;
}

console.log(maxProfit([3, 2, 6, 5, 0, 3]));
