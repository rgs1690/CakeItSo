import React from 'react'
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom"; 
export default function EventCard({ event }) {
  const navigate = useNavigate();
  return (
    <div>
      <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">{event.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Customer Name</h6>
    <p class="card-text">
      {event.date}<br/>
      {event.venu}
    </p>
    <a href="#" class="card-link">View Details</a>
  </div>
</div>
    </div>
  )
}
EventCard.propTypes = {
  event: PropTypes.shape({})
}