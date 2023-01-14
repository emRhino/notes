import { useState } from "react";
import BookCreate from "./BookCreate";
import BookList from "./BookList";

const App = () => {
  const [books, setBooks] = useState([]);
  const [bookIndex, setBookIndex] = useState(1);

  const addBook = (title) => {
    setBooks([...books, { id: bookIndex, title: title }]);
    setBookIndex(bookIndex + 1);
  };

  const deleteBook = (id) => {
    const newBooksList = books.filter((book) => {
      if (book.id !== id) {
        return book;
      }
    });
    setBooks(newBooksList);
  };

  const updateBook = (id, newTitle) => {
    const newBooksList = books.filter((book) => {
      if (book.id === id) {
        book.title = newTitle;
        return book;
      }
      return book;
    });
    setBooks(newBooksList);
  };

  return (
    <div>
      <BookCreate addBook={addBook} />
      <BookList
        bookList={books}
        deleteBook={deleteBook}
        updateBook={updateBook}
      />
    </div>
  );
};

export default App;
