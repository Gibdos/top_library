const inputName = document.querySelector("#book-title");
const inputAuthor = document.querySelector("#book-author");
const inputPages = document.querySelector("#book-pages");
const inputRead = document.querySelector("#book-read");
const btnAdd = document.querySelector("#add-book");
const domMain = document.querySelector(".main");
const items = domMain.childNodes;
let arrBooks = [];

// Book object constructor
function Book() {
	this.name = "";
	this.author = "";
	this.pages = 0;
	this.read = false;
	this.index = 0;
}

// Add book to arrBooks Library
btnAdd.addEventListener("click", () => {
	let i = 0;
	while (i < arrBooks.length) {
		i++;
	}
	let createBook = new Book();
	createBook.name = inputName.value;
	createBook.author = inputAuthor.value;
	createBook.pages = inputPages.value;
	createBook.read = inputRead.checked;
	createBook.index = i;
	arrBooks.push(createBook);
	addBookDisplay(arrBooks[i]);
});

function addBookDisplay(book) {
	let card = document.createElement("div");
	card.classList.add("card", `book-${book.index}`);
	card.innerHTML = `<h3>${book.name}</h3><p>by ${book.author}</p><p>Pages: ${book.pages}</p>`;
	if (book.read) {
		card.innerHTML += `<p>Read: <input data-index="${book.index}" type="checkbox" name="lib-read" checked />`;
		domMain.appendChild(card);
		// const tickCheck = domMain.querySelector(`[data-index="${book.index}"]`);
		// trackTicks(tickCheck, book);
	} else {
		card.innerHTML += `<p>Read: <input data-index="${book.index}" type="checkbox" name="lib-read" />`;
		domMain.appendChild(card);
	}
	const tickRead = domMain.querySelector(`[data-index="${book.index}"]`); //WHY BROKEN?
	trackTicks(tickRead);
	card.innerHTML += `<button class="book-index-${book.index}" type="button">X</button>`;
	const delCheck = domMain.querySelector(`.book-index-${book.index}`);
	removeBook(delCheck, book);
	domMain.appendChild(card);
	inputName.value = "";
	inputAuthor.value = "";
	inputPages.value = "";
	inputRead.checked = 0;
}

// Change book.read in arrBooks on click
function trackTicks(tickRead) {
	tickRead.addEventListener("click", () => {
		console.log("Click");
		const bookIndex = arrBooks.indexOf(book);
		console.log(bookIndex);
		arrBooks[bookIndex].read = false;
	});
}

// Remove book from HTML and arrBooks
function removeBook(bookNode, book) {
	bookNode.addEventListener("click", () => {
		const delBookNode = bookNode.parentElement;
		const bookIndex = arrBooks.indexOf(book);
		// console.log(bookIndex);
		arrBooks.splice(bookIndex, 1);
		domMain.removeChild(delBookNode).index;
	});
}
