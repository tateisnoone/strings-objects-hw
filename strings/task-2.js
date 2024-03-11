// Write function `checkSpam(source, example)` that returns `true`, if string `source` contains `example`, otherwise `false`.

// The function should not be case sensitive:

// If first or second parameters aren't string - throw error.

// ```javascript
// checkSpam('pitterXXX@gmail.com', 'xxx'); // true
// checkSpam('pitterxxx@gmail.com', 'XXX'); // true
// checkSpam('pitterxxx@gmail.com', 'Dummy'); // false
// ```

function checkSpam(source, example) {
  if (typeof source !== "string" && typeof example !== "string") {
    throw new Error("not a string");
  } else {
    let lowerCaseSource = source.toLowerCase();
    let lowerCaseExample = example.toLowerCase();
    if (lowerCaseSource.includes(lowerCaseExample)) {
      return true;
    } else {
      return false;
    }
  }
}
let source = "harrypotter";
let example = "Harry";
console.log(checkSpam(source, example));
