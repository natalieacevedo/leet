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

function numberOfCharacters(str) {
  const allCharacters = ["<", ">", "v", "^"];
  function numberOfEach(arr, item) {
    return arr.reduce((acc, el) => (el === item ? (acc += 1) : acc), 0);
  }

  const arrWithChar = str.split("");

  const numb = () => allCharacters.map((el) => numberOfEach(arrWithChar, el));
  const arrFinal = numb();
  arrFinal.pop();
  console.log(arrFinal);

  return arrFinal.reduce((el, acc) => acc + el, 0);
}

console.log(numberOfCharacters("<<>>>^^^<^><>^vvvvv^"));

//console.log(reverseString(["h", "e", "l", "l", "o"]));
//["o", "l", "l", "l", "o"];
