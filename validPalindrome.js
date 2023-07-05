// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

function isPalindrome(s) {
  const nonAlphanumericRegular = /[^A-Za-z0-9]/g;
  const onlyNumbersLetters = s
    .replace(nonAlphanumericRegular, "")
    .toLowerCase();
  console.log(onlyNumbersLetters);

  if (onlyNumbersLetters === "" || onlyNumbersLetters.length === 1) {
    return true;
  }

  const numberLetters = onlyNumbersLetters.length - 1;
  console.log(numberLetters);

  let isPal;
  for (
    let i = 0, j = numberLetters;
    i < numberLetters / 2 && j > numberLetters / 2;
    i++, j--
  ) {
    if (onlyNumbersLetters[i] !== onlyNumbersLetters[j]) {
      isPal = false;
      break;
    } else {
      isPal = true;
    }
  }
  return isPal;
}

console.log(isPalindrome("raceacar"));
