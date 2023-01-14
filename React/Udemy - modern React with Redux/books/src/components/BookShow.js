import BookEdit from './BookEdit';

const BookShow = ({ title, id }) => {
  const edit = (id, newTitle) => {};

  return (
    <div>
      { if ()}
      <h1>{title}</h1>
      <button onClick={edit}>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default BookShow;
