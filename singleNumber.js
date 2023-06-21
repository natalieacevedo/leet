//leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.
var singleNumber = function (nums) {
  for (i = 0; i < nums.length; i++) {
    for (j = 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        break;
      } else {
        return nums[i];
      }
    }
  }
};

console.log(singleNumber([2, 2, 1, 8, 8, 8]));
