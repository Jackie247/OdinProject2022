// DOM Variables
let bookGrid = document.getElementById("bookGrid");
let addBookBtn = document.getElementById("addBookBtn");
let form = document.getElementById('book-form');
let formCancelBtn = document.getElementById('cancelBtn')
let formSubmitBtn = document.getElementById('submitBtn')
// Library Class
function Library(){
    // array of book objects
    this.booksArray = [];
}
Library.prototype.addBookToLibrary = function (book){
    if(this.isInLibrary(book) == false){
        this.booksArray.push(book);
    }
}
Library.prototype.addBooksToGrid = function() {
    for (let index in this.booksArray){
        let book = this.booksArray[index];
        console.log(book);
        console.log(book.title);
        // Create the card elements
        let card = document.createElement("div");
        let title = document.createElement("h3");
        let author = document.createElement("p");
        let pages = document.createElement("p");
        // Update text content for elements
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        // Append book text to card div
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        // Add created card to book grid
        bookGrid.appendChild(card);
    }
}
Library.prototype.isInLibrary = function(book){
    if(this.booksArray.some(bookInArray => bookInArray.title === book.title)){
        return true;
    }
    return false;
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
Book.prototype.getTitle = function(){return this.title;}
Book.prototype.getAuthor = function(){return this.author;}
Book.prototype.getPages = function(){return this.pages;}
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
    let title = document.querySelector('[name="title"]').value;
    let author = document.querySelector('[name="author"]').value;
    let pages = document.querySelector('[name="pages"]').value;
    console.log(title);
    console.log(typeof title);
    // Book oject creation
    var book = new Book(title,author,pages);
    // Push object to library 
    library.addBookToLibrary(book);
    library.addBooksToGrid();
})