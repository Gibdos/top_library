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
	arrBooks.push(createBook);
	displayLib();
});

// Change book.read in arrBooks on click
function trackTicks(index) {
	const bookIndex = index;
	const checkRead = document.querySelector(`.read-${bookIndex}`);
	checkRead.addEventListener("click", () => {
		arrBooks[bookIndex].read = !arrBooks[bookIndex].read;
	});
}

// Remove book from arrBooks and update HTML
function removeBook(index) {
	const bookIndex = index;
	const bookNode = document.querySelector(`.book-index-${bookIndex}`);
	bookNode.addEventListener("click", () => {
		const delBookNode = bookNode.parentElement;
		arrBooks.splice(bookIndex, 1);
		domMain.removeChild(delBookNode).index;
		displayLib();
	});
}

// Array loop for display
function displayLib() {
	domMain.innerHTML = "";
	arrBooks.forEach((element, index) => {
		const bookIndex = index;
		let card = document.createElement("div");
		card.classList.add("card", `book-${bookIndex}`);
		card.innerHTML = `<h3>${element.name}</h3><p>by ${element.author}</p><p>Pages: ${element.pages}</p>`;
		if (element.read) {
			card.innerHTML += `<p>Read: <input class="read-${bookIndex}" type="checkbox" name="lib-read" checked /></p>`;
		} else {
			card.innerHTML += `<p>Read: <input class="read-${bookIndex}" type="checkbox" name="lib-read" /></p>`;
		}
		card.innerHTML += `<button class="book-index-${bookIndex}" type="button"></button>`;
		domMain.appendChild(card);
		removeBook(bookIndex);
		trackTicks(bookIndex);
	});
}
