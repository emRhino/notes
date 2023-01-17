import { useState, useContext } from 'react';
import BooksContext from '../context/books';

const BookEdit = ({ title, id, closeEditForm }) => {
  const [fieldPhrase, setFieldPhrase] = useState(title);
  const { updateBook } = useContext(BooksContext);

  const changeInput = (e) => {
    setFieldPhrase(e.target.value);
  };

  const saveChange = () => {
    updateBook(id, fieldPhrase);
    closeEditForm();
  };

  return (
    <div>
      <input value={fieldPhrase} onChange={changeInput} />
      <button onClick={saveChange}>Save</button>
    </div>
  );
};

export default BookEdit;
