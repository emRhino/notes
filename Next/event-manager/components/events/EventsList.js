import EventItem from './EventItem';
import classes from '../../styles/Home.module.css';

const EventsList = (props) => {
  const { events } = props;

  const renderList = events.map(el => <EventItem key={el.id} id={el.id} title={el.title} date={el.date} location={el.location} image={el.image} />);

  return (
    <ul >
      { renderList }
    </ul>
  )
}

export default EventsList;