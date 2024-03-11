// Write a `rmHtmlTags` function to remove HTML tags from string.

// *We may use RegExp https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions*

// Also add type checks and throw an error if param is not string;

// ```javascript
// rmHtmlTags('<p><strong><em>Content</em></strong></p>') // Content
// ```
function rmHtmlTags(string) {
  if (typeof string !== "string") {
    throw new Error("not a string");
  } else {
    return string.replace(/<[^>]*>/g, " ").trim();
  }
}
let string = "<p><strong><em>Content</em>one</strong>two</p>";
let normalString = rmHtmlTags(string);
console.log(normalString);
