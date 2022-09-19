// Library Class
function Library(){
    this.books = []
}
Library.prototype.addBookToLibrary = function (book){
    // do stuff
    this.books.push(book)
}

Library.prototype.show = function() {
    this.books.forEach(function(entry){
        console.log(entry);
    });
}

// Book Class
function Book (title,author){
    // constructor
    this.title = title;
    this.author = author;
}
// Library object creation
var library = new Library();
// Book oject creation
var book1 = new Book("Booky","J.K");
var book2 = new Book("Chooky","T.K");
var book3 = new Book("Rooky","B.K");
// DOM Variables
//let bookGrid = document.querySelector(".bookGrid");

library.addBookToLibrary(book1)
library.addBookToLibrary(book2)
library.addBookToLibrary(book3)

library.show();