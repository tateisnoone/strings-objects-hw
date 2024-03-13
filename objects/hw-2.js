// Update previous 'readingStatus(books)' function and add logic into it: if book is read by the author, display how many days ago he finished it.

// *You may find this resource helpful https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date*

// - Use object getter method name it 'daysAgo' and return string: `{x} days ago`

// Result should be:
//     'Bill have read The Road Ahead book {x} days ago'
//     'Steve have read Walter Isaacson book {x} days ago'
//     'Jhon haven't read The Hunger Games book yet'

var books = [
  {
    author: "Bill",
    title: "The Road Ahead",
    haveRead: true,
    dateOfRead: new Date(2020, 10, 10),
  },
  {
    author: "Steve",
    title: "Walter Isaacson",
    haveRead: true,
    dateOfRead: new Date(2020, 10, 5),
  },
  {
    author: "Jhon",
    title: "The Hunger Games",
    haveRead: false,
    dateOfRead: NaN,
  },
];
// Object.defineProperty(books, "daysAgo", {
//   get() {
//     let currentDate = new Date();
//     var daysAgo = Math.floor(
//       (currentDate - dateOfRead) / (1000 * 60 * 60 * 24)
//     );
//   },
// });
console.log(books);

function readingStatus(books) {
  books.forEach(function (book) {
    let author = book.author;
    let title = book.title;
    let haveRead = book.haveRead;
    let dateOfRead = book.dateOfRead;
    if (haveRead) {
      var currentDate = new Date();
      var daysAgo = Math.floor(
        (currentDate - dateOfRead) / (1000 * 60 * 60 * 24)
      );
      console.log(
        author + " have read " + title + " book " + daysAgo + " days ago"
      );
    } else {
      console.log(author + " haven't read " + title + " yet");
    }
  });
}
readingStatus(books);
