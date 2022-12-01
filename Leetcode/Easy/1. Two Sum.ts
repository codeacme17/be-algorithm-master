/**
 *  20. 有效括号
 *  https://leetcode.com/problems/valid-parentheses/
 *
 *  思路：
 *  维护一个 Hash Table
 *  遍历数组
 *  获取 target 与 nums[i] 的差值，
 *  如果 Hash Table 中存在该差值，则表示有这两数，返回数组
 *  如果不存在，则将 num[i] 作为 key，将 i 作为 value 存入 Hash 中
 *
 */

function twoSum(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];

    if (map.has(comp)) return [map.get(comp) as number, i];
    else map.set(nums[i], i);
  }

  return [];
}

twoSum([2, 11, 7, 15], 9);
