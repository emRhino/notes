import { useState, useContext } from 'react';
import BooksContext from '../context/books';

const BookCreate = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const { addBook } = useContext(BooksContext);

  const addBk = () => {
    addBook(searchPhrase);
    setSearchPhrase('');
  };
  const changeInput = (e) => {
    setSearchPhrase(e.target.value);
  };

  return (
    <div>
      <input onChange={changeInput} type='text' value={searchPhrase} />
      <button onClick={addBk}>Submit</button>
    </div>
  );
};

export default BookCreate;
