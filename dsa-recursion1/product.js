function product(nums) {
  if(nums.length === 1) return nums[0];
  let num = nums.pop();
  return num + product(nums);
}