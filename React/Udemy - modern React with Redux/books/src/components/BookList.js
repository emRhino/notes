import BookShow from "./BookShow";

const BookList = (props) => {
  const { bookList } = props;

  const rend = bookList.map((book) => {
    return (
      <div key={book.id}>
        <BookShow title={book.title} id={book.id} />
      </div>
    );
  });

  return <div>{rend}</div>;
};

export default BookList;
