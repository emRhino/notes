import BookShow from "./BookShow";
import BookEdit from "./BookEdit";

const BookList = (props) => {
  const { bookList } = props;

  const rend = bookList.map((book) => {
    return <div key={book.id}>{book.title}</div>;
  });

  return <div>{rend}</div>;
};

export default BookList;
