function numberOfTurns(st) {
  const arr = st.split("");
  const chars = ["v", "<", "^", ">"];

  function count(char) {
    return arr.reduce((acc, el) => (el === char ? acc + 1 : acc), 0);
  }

  const numberEachChar = chars.map((el) => count(el));
  numberEachChar.sort((a, b) => a - b).pop();
  return numberEachChar.reduce((acc, el) => acc + el, 0);
}

console.log(numberOfTurns("<<<>>><>vvvvvvv<<^^^<<<>>>vvvvv"));
