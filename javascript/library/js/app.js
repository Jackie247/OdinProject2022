// Library Class
function Library(){
    this.books = []
}
Library.prototype.addBookToLibrary = function (book){
    // do stuff
    this.books.push(book)
}
Library.prototype.displayBooks = function() {
    this.books.forEach(book => {
        let card = document.createElement("div")
        let title = document.createElement("h3")
        let author = document.createElement("p")
        let pages = document.createElement("p")
        let readBtn = document.createElement("button")
        let delBtn = document.createElement("button")
    });
}

Library.prototype.updateLibrary = function() {
    for (book in this.books){
        bookGrid.appendChild(book)
    }
}

Library.prototype.deleteLibrary = function() {
    
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

library.addBookToLibrary(book1)
library.addBookToLibrary(book2)
library.addBookToLibrary(book3)

//console.log(Book.prototype.isPrototypeOf(book1))

// DOM Variables
//let bookGrid = document.querySelector(".bookGrid");

library.displayBooks();