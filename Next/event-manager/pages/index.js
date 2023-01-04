import { getAllEvents } from "../dummy-data";
import EventsList from '../components/events/EventsList';

export default function Home() {
  const allEvents = getAllEvents();

  return (
    <div className="app">
      <EventsList events={allEvents} />
    </div>
  )
}
