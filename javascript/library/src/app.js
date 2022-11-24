// DOM Variables
let bookGrid = document.getElementById("bookGrid");
let addBookBtn = document.getElementById("addBookBtn");
let form = document.getElementById("book-form");
let formCancelBtn = document.getElementById("cancelBtn");
let formSubmitBtn = document.getElementById("submitBtn");
let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
let read = document.getElementById("readCheckbox");
// Library Class
class Library {
  constructor() {
    this.booksArray = [];
  }
  addBookToLibrary = (book) => {
    if (this.isInLibrary(book) == false) {
      this.booksArray.push(book);
      this.addBookToGrid(book);
    }
  };
  removeBookFromLibrary = (book) => {
    this.booksArray.splice(
      this.booksArray.findIndex(
        (bookInArray) => bookInArray.title === book.title
      ),
      1
    );
  };
  addBookToGrid = (book) => {
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
    if (book.read) {
      read.textContent = "Finished";
      read.classList.add("read");
    } else {
      read.textContent = "Unfinished";
      read.classList.add("not-read");
    }
    read.addEventListener("click", () => {
      if (read.classList.contains("read")) {
        read.classList.remove("read");
        read.classList.add("not-read");
        read.textContent = "Unfinished";
      } else if (read.classList.contains("not-read")) {
        read.classList.remove("not-read");
        read.classList.add("read");
        read.textContent = "Finished";
      }
    });
    remove.addEventListener("click", () => {
      this.removeBookFromLibrary(book);
      bookGrid.removeChild(card);
    });
    // Add classes to elements
    card.classList.add("bookCard");
    btnContainer.classList.add("card-btn-container");
    remove.classList.add("remove");
    // Update text content for elements
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    remove.textContent = "Delete";
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
  };
  isInLibrary = (book) => {
    if (
      this.booksArray.some((bookInArray) => bookInArray.title === book.title)
    ) {
      return true;
    }
    return false;
  };
}
// Book Class
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}
// Library object creation
var library = new Library();

// Display form when add book button is clicked
addBookBtn.addEventListener("click", () => {
  console.log("show display");
  if ((form.style.display = "none")) {
    form.style.display = "block";
  }
  return;
});
// Hide form if form is displayed.
formCancelBtn.addEventListener("click", () => {
  console.log("hide display");
  if ((form.style.display = "block")) {
    form.style.display = "none";
  }
  return;
});

formSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let [titleVal, authorVal, pagesVal, readVal] = [
    title.value,
    author.value,
    pages.value,
    read.checked,
  ];
  // Book oject creation
  if (titleVal === "") {
    alert("Enter title");
    return;
  }
  if (authorVal === "") {
    alert("Enter author");
    return;
  }
  if (pagesVal === "") {
    alert("Enter page count");
    return;
  }
  if (pagesVal > 9999 || pagesVal < 1) {
    alert("Enter page count between 1 and 9999");
    return;
  } else {
    var book = new Book(titleVal, authorVal, pagesVal, readVal);
    if (library.isInLibrary(book)) {
      alert("Book already exists!");
    } else {
      library.addBookToLibrary(book);
    }
  }
});
