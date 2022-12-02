/**
 *  面试题 08.01. 三步问题
 *  https://leetcode.cn/problems/three-steps-problem-lcci/
 *
 *  思路：
 *  动态规划
 *  最优子结构：f(n-1),f(n-2),f(n-3)
 *  状态转移方程：f(n) = f(n-1) + f(n-2) + f(n-3)
 *  边界情况：f(1) = 1, f(2) = 2, f(3) = 4
 *  重叠子问题：f(10) = f(9) + f(8) + f(7)
 *
 */

function waysToStep(n: number): number {
  let a = 1;
  let b = 2;
  let c = 4;
  let step = 0;

  if (n <= 1) return 1;
  if (n === 2) return 2;
  if (n === 3) return 4;

  for (let i = 4; i <= n; i++) {
    step = (a + b + c) % 1000000007;

    a = b;
    b = c;
    c = step;
  }

  return step;
}

console.log(waysToStep(7));
