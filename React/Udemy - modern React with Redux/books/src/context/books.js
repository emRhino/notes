import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const BooksContext = createContext();

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  }, []);

  const addBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
    });

    setBooks([...books, response.data]);
  };

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    // console.log(response);

    const newBooksList = books.filter((book) => {
      if (book.id !== id) {
        return book;
      }
    });
    setBooks(newBooksList);
  };

  const updateBook = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const newBooksList = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(newBooksList);
  };

  const valueToShare = {
    books,
    fetchBooks,
    addBook,
    deleteBook,
    updateBook,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
};

export { Provider };
export default BooksContext;
