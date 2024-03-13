// Write a `searchWord` function to find a word within a string. Count found word(s).
// `searchWord` takes 2 parameters:

// 1. Word or a sentence - string
// 2. Word or a sentence to find - string

// Also add type checks and throw an error if params are not strings.

// ```javascript
// searchWord("The quick brown fox", "fox"); // "'fox' was found 1 times."
// searchWord("aa, bb, cc, dd, aa", "aa"); // "'aa' was found 2 times."
// searchWord("sunshine", "sun"); // "'sun' was found 1 times."
// ```

function searchWord(string, wordToFind) {
  let words = string.split(" ");
  let count = 0;
  if (typeof string !== "string" || typeof wordToFind !== "string") {
    throw new Error("not a string");
  } else {
    for (let i = 0; i < words.length; i++) {
      if (words[i].toLowerCase() === wordToFind.toLowerCase()) {
        count++;
      }
    }
  }
  return count;
}
let string = "fox wolf fox fox lion fox";
let string1 = "fox";
let counted = searchWord(string, string1);
console.log(`'${string1}' was found ${counted} times`);
