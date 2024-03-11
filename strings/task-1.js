// Write function `upperCaseFirst(string)` that returns capitalized string.

// If parameter isn't string - throw error.

// ```javascript
// upperCaseFirst('pitter'); // Pitter
// upperCaseFirst(''); // ''
// ```

function upperCaseFirst(string) {
  if (typeof string !== "string") {
    throw new Error("not a string");
  } else {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
let string = "pitter";
let uppercasedString = upperCaseFirst(string);
console.log(uppercasedString);
