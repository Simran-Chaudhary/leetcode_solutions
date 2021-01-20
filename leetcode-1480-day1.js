/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    nums[i] = sum;
  }
  return nums;
};

// Time complexity O(n)
// Space Complexity O(1)
