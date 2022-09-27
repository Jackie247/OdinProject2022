// DOM Variables
let bookGrid = document.getElementById(".bookGrid");
let addBookBtn = document.getElementById("addBookBtn");
let form = document.getElementById('book-form');
let title = document.getElementById('title').textContent;
let author = document.getElementById('author').textContent;
let pages = document.getElementById('pages').textContent;
let formCancelBtn = document.getElementById('cancelBtn')
let formSubmitBtn = document.getElementById('submitBtn')
// Library Class
function Library(){
    // array of book objects
    this.booksArray = [];
}
Library.prototype.addBookToLibrary = function (book){
    this.booksArray.push(book);
}
Library.prototype.createBookCard = function() {
    // Book oject creation
    var book = new Book(title,author,pages);
    // Create the card elements
    let card = document.createElement("div");
    let title = document.createElement("h3");
    let author = document.createElement("p");
    let pages = document.createElement("p");
    //let readBtn = document.createElement("button");
    //let delBtn = document.createElement("button");
    // Append book text to card div
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    //card.appendChild(readBtn);
    //ard.appendChild(delBtn);
    // set text content to book object fields
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    // Add created card to book array
    this.booksArray.push(card);
}

Library.prototype.updateLibrary = function() {
    for (book in this.booksArray){
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
function Book (title,author,pages){
    // constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
}
// Library object creation
var library = new Library();

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

formSubmitBtn.addEventListener('click', () => {
    console.log("success");

    var bookCard = library.createBookCard(book);
    library.addBookToLibrary(bookCard);
    library.updateLibrary();
})