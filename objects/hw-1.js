// Write a 'readingStatus(books)' function to display the reading status of the following books.

// - Use array iteration
// - Log each of them separately

// ```javascript
// var Books = [
//    {
//        author: 'Bill',
//        title: 'The Road Ahead',
//        haveRead: true,
//        dateOfRead: new Date(2020, 10, 10)
//    },
//    {
//        author: 'Steve',
//        title: 'Walter Isaacson',
//        haveRead: true,
//        dateOfRead: new Date(2020, 10, 5)
//    },
//    {
//        author: 'Jhon',
//        title:  'The Hunger Games',
//        haveRead: false,
//        dateOfRead: NaN
//    }
// ];
// ```

// Result should be:
//     'Bill have read The Road Ahead book'
//     'Steve have read Walter Isaacson book'
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

function readingStatus(books) {
  books.forEach(function (book) {
    let author = book.author;
    let title = book.title;
    let haveRead = book.haveRead;
    let dateOfRead = book.dateOfRead;
    if (haveRead) {
      console.log(author + " have read " + title);
    } else {
      console.log(author + " haven't read " + title);
    }
  });
}
readingStatus(books);
