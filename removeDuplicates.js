// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

//     Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
//     Return k.

//SOLUTION CREATING AN EXTRA ARRAY

// function removeDuplicate(nums) {
//   return nums.reduce((prev, current) => {
//     return prev.includes(current) ? prev : prev.concat(current);
//   }, []);
// }

//SOLUTION IN PLACE FIRST APPROACH, NOT TOO EFICCIENT
// function removeDuplicate(nums) {
//   const copy = [...nums];
//   for (let i = 0; i < nums.length; i++) {
//     const currentItemIn = copy.indexOf(nums[i]);
//     if (currentItemIn !== -1) {
//       nums.splice(i + 1, 1);
//     }
//   }
//   return nums;
// }

//MORE EFFICIENT SOLUTION:

// function removeDuplicate(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let j = 0;
//     while (j < nums.length && nums[i] === nums[j]) {
//       j++;
//     }
//     nums.splice(i, j);
//   }
//   return nums;
// }

function removeDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    // for (let j = i + 1; j < nums.length && nums[i] === nums[j]; ) {
    nums.splice(i, 1);
    // }
  }
  return nums;
}

console.log(removeDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
