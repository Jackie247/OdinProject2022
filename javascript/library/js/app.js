let myLibrary = [];

function Book (title,author){
    // constructor
    this.title = title;
    this.author = author;
}

function addBookToLibrary(book){
    // do stuff
    myLibrary.push(book);
}

function displayLibrary(){
    myLibrary.forEach(function(entry){
        console.log(entry);
    });
}

var Book1 = new Book("Booky","J.K");
var Book2 = new Book("Chooky","T.K");
var Book3 = new Book("Rooky","B.K");

addBookToLibrary(Book1);
addBookToLibrary(Book2);
addBookToLibrary(Book3);

displayLibrary();