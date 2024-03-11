// Write a `reverseCase(sentence)` function to replace uppercase letter with lowercase letters and lowercase letters with uppercase ones.

// Function should throw an error if parameter is not a string.

// examples:

// `reverseCase('Hello theRe') // expected: 'hELLO THErE'`

// `reverseCase('BIG LETTERS') // expected: 'big letters'`

// // `reverseCase('') // expected: ''`
// function reverseCase(sentence) {
//   let lowerCased = "";
//   let upperCased = "";
//   let reversedSentence = "";
//   if (typeof sentence !== "string") {
//     throw new Error("not a string");
//   } else {
//     for (let i = 0; i < sentence.length; i++) {
//       if (sentence[i] === sentence[i].toUpperCase()) {
//         lowerCased += sentence[i].toLowerCase();
//       } else {
//         upperCased += sentence[i].toUpperCase();
//       }
//     }
//     return (reversedSentence = lowerCased + upperCased);
//   }
// }

// let string = "HelLoWorLd";
// console.log(reverseCase(string)); //reverses the letters but the sequence is not correct

//another version - this doesn't work as well

function reverseCase1(sentence) {
  if (typeof sentence !== "string") {
    throw new Error("not a string");
  } else {
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === sentence[i].toLowerCase()) {
        return sentence[i].replace(sentence[i].toUpperCase);
      } else {
        return sentence[i].replace(sentence[i].toLowerCase);
      }
    }
  }
}
let sentence = "AbCdEf Jkm";
console.log(reverseCase1(sentence));
