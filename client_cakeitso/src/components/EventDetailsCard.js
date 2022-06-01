import React from 'react';
import Proptypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import { deleteEvent, getEventsByUserId } from '../api/eventData';
export default function EventDetailsCard({ event }) {
  const navigate = useNavigate();
  const handleUpdate = () => {
    navigate(`/EditEvent/${event.id}`)
  }
  const handleDelete = () => {
    console.log(event.id)
    deleteEvent(event.id).then(() => {
      getEventsByUserId(event.userId).then(() => {
        navigate(`/events`)
      })
    })
  }
  const handleCustomer = () => {
    navigate(`/CustomerDetails/${event.customerId}`)
  }
  const handleCake = () => {
    navigate(`/CakeDetails/${event.cakeId}`)
  }
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
    <li class="list-group-item">Total: ${event.totalPrice} </li>
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
    <button type="button" onClick={handleCustomer} class="btn btn-primary">View Customer Info</button>
    <button type="button" onClick={handleCake}class="btn btn-primary">View Cake Details</button>
    <button type="button" onClick={handleUpdate} class="btn btn-primary">Update Event</button>
    <button type="button" onClick={handleDelete} class="btn btn-primary">Delete Event</button>
  </div>
</div>

  )
}
EventDetailsCard.propTypes = {
  event: Proptypes.shape({}),
};