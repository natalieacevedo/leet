// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
function rotate(arr, k) {
  // k = arr.length % k;

  const len = arr.length;
  const sliced = arr.slice(len - k);
  if (arr.length < k) {
    k = k % arr.length;
    for (let i = 0; i < k; i++) {
      arr.splice(i, 0, sliced[i]);
      arr.pop();
    }
  } else {
    for (let i = 0; i < sliced.length; i++) {
      arr.splice(i, 0, sliced[i]);
      arr.pop();
    }
  }

  return arr;
}

console.log(rotate([1, 2], 5));
