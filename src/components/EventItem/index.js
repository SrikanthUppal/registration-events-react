// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, isActive, setActiveEventId} = props
  const {imageUrl, name, location, id} = eventDetails
  const className = isActive ? 'event-image is-active' : 'event-image'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="list-item">
      <button className="image-button" type="button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={className} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}
export default EventItem
