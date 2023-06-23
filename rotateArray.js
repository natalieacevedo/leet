// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
function rotate(arr, k) {
  if (k > arr.length) {
    k = k % arr.length;
    console.log(k);
    for (let i = 0; i < k; i++) {
      arr.splice(i, 0, arr[i]);
    }
  }

  const len = arr.length;
  const sliced = arr.slice(len - k);

  for (let i = 0; i < sliced.length; i++) {
    arr.splice(i, 0, sliced[i]);
    arr.pop();
  }
}

console.log(rotate([1, 2, 5, 8], 1));
