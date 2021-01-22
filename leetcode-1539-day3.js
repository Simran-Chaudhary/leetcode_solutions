/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
  let missingPrev = arr[0] - 1;
  let missingSoFar = arr[0] - 1;
  let missing;
  let elementPresentInArrayRange = false; // check if missing element found in array range
  if (k < arr[0]) {
    //if missing element present before forst element
    return k;
  }
  for (let i = 1; i < arr.length; i++) {
    // between 4 7 there are 7 - 4 - 1 = 2 missing numbers
    missingSoFar = missingSoFar + arr[i] - arr[i - 1] - 1;
    if (missingSoFar >= k) {
      missing = arr[i - 1] + k - missingPrev;
      elementPresentInArrayRange = true;
      break;
    }
    missingPrev = missingSoFar;
  }
  //missing element present outside array range
  if (!elementPresentInArrayRange === false)
    return arr[arr.length - 1] + k - missingSoFar;
  return missing;
};

// Time complexity O(n)
// Space Complexity O(1)
