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
      <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">{event.name}</h5>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{event.date}</li>
    <li className="list-group-item">Customer: {event.customerName}</li>
    <li className="list-group-item">Cake for Event: {event.cakeName}</li>
    <li className="list-group-item">Type: {event.typeOfEvent}</li>
    <li className="list-group-item">Total: ${event.totalPrice} </li>
  </ul>
  <h5 className="card-title">Venu Info</h5>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{event.venu}</li>
    <li className="list-group-item">{event.venuPhone}</li>
    <li className="list-group-item">{event.venuAddress}</li>
    <li className="list-group-item">Miles to Venu: {event.miles}</li>
  </ul>
    <p className="card-text">Notes: {event.notes}</p>
  <div className="card-body">
    <button type="button" onClick={handleCustomer} className="btn btn-primary">View Customer Info</button>
    <button type="button" onClick={handleCake}className="btn btn-primary">View Cake Details</button>
    <button type="button" onClick={handleUpdate} className="btn btn-primary">Update Event</button>
    <button type="button" onClick={handleDelete} className="btn btn-primary">Delete Event</button>
  </div>
</div>

  )
}
EventDetailsCard.propTypes = {
  event: Proptypes.shape({}),
};