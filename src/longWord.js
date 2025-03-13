// console.log(factorials(6));
// longest sentence
function longWord(sentence) {
  return sentence
    .split(' ')
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ''
    );
}
