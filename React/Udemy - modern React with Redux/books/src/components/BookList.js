import BookShow from './BookShow';
import BookEdit from './BookEdit';

const BookList = (props) => {

  const { bookList } = props;

  const rend = bookList.map(book => {
    return (
      <div>
        {book.title}
      </div>
    )
  })

  return (
    <div>
      <ul>
        { rend }
      </ul>
    </div>
  )
}

export default BookList;