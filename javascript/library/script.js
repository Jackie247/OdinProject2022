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

