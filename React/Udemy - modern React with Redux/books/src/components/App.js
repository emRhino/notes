import { useState, useEffect } from "react";
import axios from "axios";

import BookCreate from "./BookCreate";
import BookList from "./BookList";

const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const addBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    setBooks([...books, response.data]);
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
