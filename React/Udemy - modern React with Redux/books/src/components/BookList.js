import BookShow from "./BookShow";

const BookList = (props) => {
  const { bookList, deleteBook, updateBook } = props;

  const rend = bookList.map((book) => {
    return (
      <div key={book.id}>
        <BookShow
          title={book.title}
          id={book.id}
          deleteBook={deleteBook}
          updateBook={updateBook}
        />
      </div>
    );
  });

  return <div>{rend}</div>;
};

export default BookList;
