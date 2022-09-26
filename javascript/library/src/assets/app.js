// Library Class
function Library(){
    this.books = [];
}
Library.prototype.addBookToLibrary = function (book){
    this.books.push(book);
}
Library.prototype.createBookCard = function(book) {
        let card = document.createElement("div");
        let title = document.createElement("h3");
        let author = document.createElement("p");
        let genre = document.createElement("p");
        let pages = document.createElement("p");
        let readBtn = document.createElement("button");
        let delBtn = document.createElement("button");

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(genre);
        card.appendChild(readBtn);
        card.appendChild(delBtn);

        bookGrid.appendChild(card)
}

Library.prototype.updateLibrary = function() {
    for (book in this.books){
        bookGrid.appendChild(book);
    }
}

Library.prototype.deleteLibrary = function() {
    // returns a nodelist of div childs
    booksInLibrary = document.querySelectorAll(".bookGrid")
    for(let i = 0; i < booksInLibrary.length; i++){
        booksInLibrary.removeChild(booksInLibrary[i]);
    }
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

library.addBookToLibrary(book1);
library.addBookToLibrary(book2);
library.addBookToLibrary(book3);

//console.log(Book.prototype.isPrototypeOf(book1))

// DOM Variables
let bookGrid = document.querySelector(".bookGrid");
let addBookBtn = document.getElementById("addBookBtn");
let form = document.getElementById('book-form');
let formCancelBtn = document.getElementById('cancelBtn')
let formSubmitBtn = document.getElementById('submitBtn')

// Display form when add book button is clicked
addBookBtn.addEventListener('click',() =>{
    console.log("show display");
    if (form.style.display = "none"){
        form.style.display = "block";
    }
    return;
});
// Hide form if form is displayed.
formCancelBtn.addEventListener('click', () => {
    console.log("hide display");
    if(form.style.display = "block"){
        form.style.display = "none"
    }
    return;
})
