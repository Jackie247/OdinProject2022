// DOM Variables
let bookGrid = document.getElementById("bookGrid");
let addBookBtn = document.getElementById("addBookBtn");
let form = document.getElementById('book-form');
let formCancelBtn = document.getElementById('cancelBtn');
let formSubmitBtn = document.getElementById('submitBtn');
let title = document.getElementById('title');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
let read = document.getElementById('readCheckbox');
// Library Class
function Library(){
    // array of book objects
    this.booksArray = [];
}
Library.prototype.addBookToLibrary = function (book){
    if(this.isInLibrary(book) == false){
        this.booksArray.push(book);
        this.addBookToGrid(book);
    }
}
Library.prototype.removeBookFromLibrary = function(book){
    if(this.isInLibrary(book)){
        bookIndex = this.booksArray.findIndex(bookInArray => bookInArray === book.title);
        this.booksArray.splice(bookIndex, bookIndex >= 0 ? 1 : 0);
    }
}
Library.prototype.addBookToGrid = function(book) {
    console.log(book);
    console.log(book.title);
    // Create the card elements
    let card = document.createElement("div");
    let title = document.createElement("h3");
    let author = document.createElement("p");
    let pages = document.createElement("p");
    let btnContainer = document.createElement("div");
    let read = document.createElement("button");
    let remove = document.createElement("button");
    if(book.read){
        read.textContent = 'Finished';
        read.classList.add("read");
    }
    else{
        read.textContent = 'Unfinished'
        read.classList.add("not-read")
    }
    read.addEventListener('click',()=>{
        if(read.classList.contains("read")){
            read.classList.remove("read");
            read.classList.add("not-read");
            read.textContent = 'Unfinished'
        }
        else if(read.classList.contains("not-read")){
            read.classList.remove("not-read");
            read.classList.add("read");
            read.textContent = 'Finished';
        }
    })
    remove.addEventListener('click',()=>{
        bookGrid.removeChild(card);
        this.removeBookFromLibrary(book);
    })
    // Add classes to elements
    card.classList.add("bookCard");
    btnContainer.classList.add("card-btn-container")
    remove.classList.add("remove");
    // Update text content for elements
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    remove.textContent = 'Delete';
    // Append buttons to btn div
    btnContainer.appendChild(read);
    btnContainer.appendChild(remove);
    // Append book text to card div
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(btnContainer);
    
    bookGrid.appendChild(card);
    form.reset();
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
function Book (title,author,pages,read){
    // constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
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
    let [titleVal,authorVal,pagesVal,readVal] = [title.value,author.value,pages.value,read.checked];
    // Book oject creation
    if(titleVal === '' || authorVal === '' || pagesVal === '' || readVal === ''){
        return false;
    }
    else if(pagesVal > 9999 || pagesVal < 1){
        return false;
    }
    else{
        var book = new Book(titleVal,authorVal,pagesVal,readVal);
        library.addBookToLibrary(book);
        return true;
    }
})

let changeReadBtn = function(){
    let bookStatus = document.getElementById('book-status');
    bookStatus.addEventListener('click',()=>{
        if(bookStatus.classList.contains("read")){
            bookStatus.classList.remove("read");
            bookStatus.classList.add("not-read");
            bookStatus.textContent = 'Unfinished'
        }
        else if(bookStatus.classList.contains("not-read")){
            bookStatus.classList.remove("not-read");
            bookStatus.classList.add("read");
            bookStatus.textContent = 'Finished';
        }
    })
}