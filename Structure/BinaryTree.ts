let nums = [1, 2, 3, 4, 5];
let i = -1;

function traverse(nums: number[], i: number): void {
  if (i === nums.length) return;

  traverse(nums, i + 1);
  console.log(nums[i]);
}

traverse(nums, i);
