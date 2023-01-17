import { useEffect, useContext, useCallback } from 'react';

import BookCreate from './BookCreate';
import BookList from './BookList';

import BooksContext from '../context/books';

const App = () => {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div>
      <BookCreate />
      <BookList />
    </div>
  );
};

export default App;
