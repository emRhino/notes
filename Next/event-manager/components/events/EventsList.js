import EventItem from './EventItem';

const EventsList = (props) => {
  const { events } = props;

  const renderList = events.map(el => <EventItem key={el.id} id={el.id} title={el.title} date={el.date} location={el.location} image={el.image} />);

  return (
    <ul>
      { renderList }
    </ul>
  )
}

export default EventsList;