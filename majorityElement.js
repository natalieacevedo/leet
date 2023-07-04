// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

function majority(nums) {
  const counts = new Map();
  for (const n of nums) {
    const c = counts.get(n);
    if (!c) {
      counts.set(n, 1);
    } else {
      counts.set(n, c + 1);
    }
  }
  return [...counts.entries(counts)].reduce((acc, el) =>
    acc[1] > el[1] ? acc : el
  )[0];
}

console.log(majority([3, 2, 3, 9, 9, 9]));
