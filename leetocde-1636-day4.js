/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
  let frequency = {};
  // find out frequency of every element
  // for input [1,1,2,2,2,3]
  // frequency = {'1' : 2, '2' : 3; '3' : 1}
  for (let i = 0; i < nums.length; i++) {
    if (frequency[nums[i]]) frequency[nums[i]]++;
    else frequency[nums[i]] = 1;
  }

  // frequency = [[1,2],[2,3],[3,1]]
  frequency = Object.entries(frequency);

  // sort the above array based on frequency
  // [[2,3],[1,2],[3,1]]
  frequency.sort(function(a, b) {
    if (a[1] != b[1]) return a[1] - b[1];
    else return b[0] - a[0];
  });

  // create the new array based on top result
  let index = 0;
  for (let i = 0; i < frequency.length; i++) {
    for (let j = 0; j < frequency[i][1]; j++) {
      nums[index++] = frequency[i][0];
    }
  }
  return nums;
};

// Time complexity O(nlogn) best sorting algo is nlogn time
// Space Complexity O(n) for frequency
