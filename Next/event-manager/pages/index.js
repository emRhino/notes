import { getAllEvents } from "../dummy-data";
import EventsList from '../components/events/EventsList';
import classes from '../styles/Home.module.css';

export default function Home() {
  const allEvents = getAllEvents();

  return (
    <div className={classes.main}>
      <EventsList events={allEvents} />
    </div>
  )
}
