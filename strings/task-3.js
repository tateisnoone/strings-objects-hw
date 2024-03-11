// Write function `truncate(string, maxlength)` that checks string's length, and if length is more than `maxlength` – replace end of string string with  `... ` ,so that its length is equal to `maxlength`.

// The result of the function should be (if necessary) a truncated string.

// If first parameter isn't string - throw error.
// If second parameter isn't number - throw error.

// ```javascript
// truncate('I wanna to say next thing about this topic', 22); // 'I wanna to say next...'
// ```
function truncate(string, maxlength) {
  if (typeof string !== "string" || typeof maxlength !== "number") {
    throw new Error("parameter types should be string and number");
  } else {
    length = string.length;
    console.log(length);
    if (length > maxlength) {
      return string.slice(0, maxlength - 3) + "...";
    } else {
      return string;
    }
  }
}
let string = "one two three four";
let maxlength = 10;
console.log(truncate(string, maxlength));
