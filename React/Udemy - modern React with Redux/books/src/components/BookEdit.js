import { useState } from "react";

const BookEdit = ({ title, id, updateBook, closeEditForm }) => {
  const [fieldPhrase, setFieldPhrase] = useState(title);

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
