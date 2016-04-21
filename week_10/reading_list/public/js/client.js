var Book = function(isbn){
  this.url = 'http://localhost:1337/books/' +isbn;
  this.data;
}

Book.prototype = {  // Utilises a defined list of methods for all objects of the same type

  get: function(callback){
    var that = this;

    var request = new XMLHttpRequest();
    request.open('GET', this.url);
    request.onload = function(){
      that.data = JSON.parse(request.responseText);
      callback();
    }
    request.send(null);
  }

}  

window.onload = function(){

  var form = document.querySelector('#isbnSearch');
  var input = document.querySelector('#isbnInput');
  var bookView = document.querySelector('#bookDisplay');
  var storedBooksView = document.querySelector('#storedBooks');

  var books = JSON.parse( localStorage.getItem('books') ) || [];

  var displayBooks = function(){
    storedBooksView.innerHTML = ''; // This clears the object so the list doesn't get repeated.

    for(book in books) {
      var data = books[book];

      var li = document.createElement('li');
      li.innerHTML = "<img src='" + data.cover.small + "'>" +data.title + '<button class="removeBook" data-id="' + book + '">Remove Book</button>'; 

      storedBooksView.appendChild(li);
    }
  }



  form.onsubmit = function(event){
    event.preventDefault();
    var isbn = input.value;
    var currentBook = new Book(isbn);

    currentBook.get(function(){

      var data = currentBook.data;
      var bookDisplay = "<h4>" + data.title + "</h4> <img src='"+ data.cover.large + "'><button id='addBook'>Add to list</button>";
      bookView.innerHTML = bookDisplay;

      document.querySelector('#addBook').onclick = function(){
        books.push(data);
        localStorage.setItem('books', JSON.stringify(books));
        displayBooks();
      }


    })

  }
  displayBooks(); // This populates the localStorage regardless of refresh.
}







