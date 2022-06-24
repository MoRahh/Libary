// Declare Empty array for Libary
let myLibary = [];

// Object Constructor

function Book(){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = function () {
    //     return (title + " " + author + ", " + pages + " " + read)
    // }
}

// Function for adding a new book to array 

function addBookToLibary(title, author, pages, read){
    let book = new Book(title,author,pages,read) ;
    myLibary.push(book);

}

// Function to display the Libary array to cards
function DisplayBook(){
    const books = document.querySelector('.books');
    
    myLibary.forEach(myLibary => {
        const card = document.createElement('div');
        card.classList.add("card");
        books.appendChild(card);
    })
};

// button to add new book 
const btn = document.querySelector('.button')
btn.addEventListener('click', () => {
    const form = document.getElementById('form');
    form.style.display = 'block';
  
    // if (form.style.display === 'none') {
    //   // 👇️ this SHOWS the form
    //   form.style.display = 'block';
    // } else {
    //   // 👇️ this HIDES the form
    //   form.style.display = 'none';
    // }
  });

  const submit = document.querySelector('.submit');
  submit.addEventListener('click', () => {
    form.style.display = 'none';
  })