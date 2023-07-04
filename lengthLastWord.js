function lengthLastWord(s) {
  const arr = s.split(" ").filter((el) => el.trim());
  return arr[arr.length - 1].length;
}

console.log(lengthLastWord("   fly me   to   the moon  "));
