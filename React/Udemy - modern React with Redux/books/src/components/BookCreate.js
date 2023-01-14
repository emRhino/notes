import { useState } from "react";

const BookCreate = ({ addBook }) => {
  const [searchPhrase, setSearchPhrase] = useState("");

  const addBk = () => {
    addBook(searchPhrase);
  };
  const changeInput = (e) => {
    setSearchPhrase(e.target.value);
  };

  return (
    <div>
      <input onChange={changeInput} type="text" value={searchPhrase} />
      <button onClick={addBk}>Submit</button>
    </div>
  );
};

export default BookCreate;
