import { useState } from "react";
import BookCreate from "./BookCreate";
import BookList from "./BookList";

const App = () => {
  const [books, setBooks] = useState([{ id: 1, title: "Harry Potter" }]);

  return (
    <div>
      <BookCreate books={books} addBook={setBooks} />
      {<BookList bookList={books} />}
    </div>
  );
};

export default App;
