import React from 'react'
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom"; 
export default function EventCard({ event }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/EventDetails/${event.id}`)
  }
  return (
    <div>
      <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">{event.name}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{event.customerName}</h6>
    <p className="card-text">
      {new Date(event.date) > new Date() ? event.date : 'PASSED' }<br/>
      {event.venu}
    </p>
    <button type="button" onClick={handleClick} className="btn btn-primary">View Details</button>
  </div>
</div>
    </div>
  )
}
EventCard.propTypes = {
  event: PropTypes.shape({})
}