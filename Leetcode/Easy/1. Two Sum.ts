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
