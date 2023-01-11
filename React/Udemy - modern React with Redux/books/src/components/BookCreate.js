const BookCreate = (props) => {

  const sub = () => {
    props.updateFn({"id":2,"title":"Dark Tower"})
  }

  return (
    <div>
      <form>
        <input type="text" />
        <button onClick={sub}>Submit</button>
      </form>
    </div>
  )
}

export default BookCreate;