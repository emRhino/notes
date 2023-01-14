import { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ title, id, deleteBook, updateBook }) => {
  const [showEditForm, setShowEditForm] = useState(false);

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
          <BookEdit
            title={title}
            id={id}
            updateBook={updateBook}
            closeEditForm={closeEditForm}
          />
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
