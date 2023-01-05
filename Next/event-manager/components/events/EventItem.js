import Link from 'next/link';

const EventItem = (props) => {
  const { id, title, date, location, image } = props;

  const readeableDate = () => { return new Date(date).toLocaleDateString('pl-PL') };

  return (
    <li>
      <div className="single-event-wrapper">
        <div className="image">
          <img style={{maxWidth: '200px'}} src={`/${image}`} alt=""/>
        </div>
        <div className="title">{ title }</div>
        <div className="location">{ location }</div>
        <div className="date">{ readeableDate() }</div>
        <div><Link href={`/events/${id}`}>Zobacz więcej</Link></div>
      </div>
    </li>
  )
}

export default EventItem;