/**
 *  70. 爬楼梯
 *  https://leetcode.com/problems/climbing-stairs/
 *
 *  思路：
 *  动态规划
 *  最优子结构：f(n-1)、f(n-2)
 *  状态转移方程：f(n)=f(n-1)+f(n-2)
 *  边界：f(1)=1、f(2)=2
 *  重叠子问题：f(10)=f(9)+f(8)、f(9)=f(8)+f(7)
 *
 *  Review
 *  2022.12.6 Soso - 忘了创建 temp 进行转换
 *
 */

function climbStairs(n: number): number {
  let temp = 0;
  let a = 1;
  let b = 2;

  if (n <= 1) temp = 1;
  if (n === 2) temp = 2;

  for (let i = 3; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }

  return temp;
}

console.log(climbStairs(3));
