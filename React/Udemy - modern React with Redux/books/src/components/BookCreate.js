import BookShow from "./BookShow";

const BookCreate = (props) => {
  const sub = () => {
    props.addBook(...props.books, { id: 2, title: "Dark Tower" });
  };

  return (
    <div>
      <input type="text" />
      <button onClick={sub}>Submit</button>
    </div>
  );
};

export default BookCreate;
