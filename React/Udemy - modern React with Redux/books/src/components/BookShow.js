import { useState, useContext } from 'react';
import BookEdit from './BookEdit';
import BooksContext from '../context/books';

const BookShow = ({ title, id }) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const { deleteBook, updateBook } = useContext(BooksContext);

  const toogleUpdateForm = () => {
    setShowEditForm(true);
  };

  const handleClick = () => {
    deleteBook(id);
  };

  const closeEditForm = () => {
    setShowEditForm(!showEditForm);
  };

  return (
    <div>
      <h1>
        {showEditForm ? (
          <BookEdit title={title} id={id} closeEditForm={closeEditForm} />
        ) : (
          title
        )}
      </h1>

      <button onClick={toogleUpdateForm}>Edit</button>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default BookShow;
