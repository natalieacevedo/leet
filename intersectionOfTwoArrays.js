// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
var intersection = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  console.log(set1);
  let output = [...set1].filter((x) => set2.has(x));
  console.log(output);
  return output;
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
