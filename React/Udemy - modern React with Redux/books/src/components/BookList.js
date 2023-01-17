import { useContext } from 'react';
import BooksContext from '../context/books';
import BookShow from './BookShow';

const BookList = () => {
  const { books } = useContext(BooksContext);

  const rend = books.map((book) => {
    return (
      <div key={book.id}>
        <BookShow title={book.title} id={book.id} />
      </div>
    );
  });

  return <div>{rend}</div>;
};

export default BookList;
