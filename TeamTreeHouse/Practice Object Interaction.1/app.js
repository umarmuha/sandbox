const library = new Library();
const book = new Book('Harry Potter and the Sorcerer\'s Stone', 'J.K. Rowling', '978-0439708180');
const patron = new Patron('Bat Man', 'batman@cave.com');

library.addBook(book);
library.addPatron(patron);

patron.checkOut(book);
//patron.returnBook(book);

//console.log(patron);
//console.log(book);

library.chargeFines();
console.log(patron);
