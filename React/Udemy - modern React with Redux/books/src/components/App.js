import { useState } from 'react';
import BookCreate from './BookCreate';
import BookList from './BookList';

const App = () => {
  const [books, setBooks] = useState([]);
  const [bookIndex, setBookIndex] = useState(1);

  const addBook = (title) => {
    setBooks(...books, { id: bookIndex, title: title });
    setBookIndex(bookIndex + 1);
  };

  return (
    <div>
      <BookCreate addBook={addBook} />
      <BookList bookList={books} />
    </div>
  );
};

export default App;
