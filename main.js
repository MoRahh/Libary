let myLibary = [];


// Object Constructor
function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibary() {
    const book = new Book(title,author,pages,read);
    myLibary.push(book);
}

function DisplayBooks() {
    for(let i = 0; i<=myLibary.length; i++){
        console.log(myLibary[i])
    }
}