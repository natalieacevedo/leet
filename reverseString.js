// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

function reverseString(s) {
  let last = s.length - 1;
  for (let i = 0; i < s.length / 2; i++) {
    let first = s[i];
    s[i] = s[last];
    s[last] = first;
    last--;
  }
  return s;
}

console.log(reverseString(["h", "e", "l", "l", "o"]));
//["o", "l", "l", "l", "o"];
