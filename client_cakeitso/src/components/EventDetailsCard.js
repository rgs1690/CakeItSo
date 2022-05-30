import React from 'react';
import Proptypes from "prop-types";

export default function EventDetailsCard({ event }) {
  return (
    <div>
      <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">{event.name}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{event.date}</li>
    <li class="list-group-item">Customer: {event.customerName}</li>
    <li class="list-group-item">Cake for Event: {event.cakeName}</li>
    <li class="list-group-item">Type: {event.typeOfEvent}</li>
    <li class="list-group-item">Total Price for Event </li>
  </ul>
  <h5 class="card-title">Venu Info</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{event.venu}</li>
    <li class="list-group-item">{event.venuPhone}</li>
    <li class="list-group-item">{event.venuAddress}</li>
    <li class="list-group-item">Miles to Venu: {event.miles}</li>
  </ul>
    <p class="card-text">Notes: {event.notes}</p>
  <div class="card-body">
    <a href="#" class="card-link">View Customer Info</a>
    <a href="#" class="card-link">View Cake Details</a>
    <a href="#" class="card-link">Update Event</a>
    <a href="#" class="card-link">Delete Event</a>
  </div>
</div>

  )
}
EventDetailsCard.propTypes = {
  event: Proptypes.shape({}),
};