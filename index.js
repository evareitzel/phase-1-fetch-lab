function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  // .then(data => console.log(data))
  .then(data => renderBooks(data))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

// Deliverables
// this function should include a fetch request to the Game of Thrones API (https://anapioficeandfire.com/api/books). 
// The returned response should be converted to JSON. 
// Then, it should call the second function, renderBooks(), passing in the JSON-ified data as the argument. 

// To check if you have done this correctly, open up the index.html page of this lab; you should see a list of Game Of Thrones titles on your webpage.