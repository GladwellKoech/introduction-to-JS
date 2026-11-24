const book = {
  title: "The Great Adventure",
  author: "Jane Smith",
  year: 2018,
  pages: 320,
  available: true
};

// Print title using dot notation
console.log(book.title);

// Print author using bracket notation
console.log(book["author"]);

// Add a new property called genre
book.genre = "Fiction";

// Change available to false (book has been borrowed)
book.available = false;

// Delete the year property
delete book.year;

// Print all the keys, then all the values
console.log(Object.keys(book));
console.log(Object.values(book));

// Loop through and print each property as key: value
for (let key in book) {
  console.log(key + ": " + book[key]);
}