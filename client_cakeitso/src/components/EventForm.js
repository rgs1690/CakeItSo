import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import getCurrentUsersUid from "../helpers/helpers";
import { getCakebyId } from "../api/cakeData";
import { createEvent } from "../api/eventData";
import {getCustomerbyId } from "../api/customerData";
const initialState = {
  userId: "",
  name: "",
  customerId: "",
  cakeId: "",
  typeOfEvent: "",
  venu: "",
  venuPhone: "",
  venuAddress: "",
  date: "",
  time: "",
  miles: 0,
  pricePerMile: 0,
  notes: "",
  totalPrice: 0,
};
export default function CakeForm(obj = {}) {
  const [formInput, setFormInput] = useState(initialState);
  const [cake, setCake] = useState({});
  const [customer, setCustomer ] = useState({});
  const navigate = useNavigate();
  const currentUser = getCurrentUsersUid();
  const { id } = useParams();
  useEffect(() => {
    getCakebyId(id).then(setCake);
    getCustomerbyId(cake.customerId).then(setCustomer);
    if (obj.id) {
      setFormInput({
        userId: obj.userId,
        name: obj.name,
        customerId: obj.customerId,
        cakeId: obj.cakeId,
        typeOfEvent: obj.typeOfEvent,
        venu: obj.venu,
        venuPhone: obj.venuPhone,
        venuAddress: obj.venuAddress,
        date: obj.date,
        time: obj.time,
        miles: obj.miles,
        pricePerMile: obj.pricePerMile,
        notes: obj.notes,
        totalPrice: totalPrice(),
        cakeName: obj.cakeName,
        customerName: obj.customerName
      });
    }
  }, [obj]);
  const resetForm = () => {
    setFormInput(initialState);
  };
  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const totalPrice = () => {
    const answer = cake.totalCost + formInput.miles * formInput.pricePerMile;
    return answer;
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (obj.id) {
      console.log(obj.id);
    } else {
      createEvent({
        ...formInput,
        userId: currentUser,
        customerId: cake.customerId,
        cakeId: cake.id,
        totalPrice: totalPrice(),
        cakeName: cake.name,
        customerName: customer.name,
      }).then(() => {
        resetForm();
        navigate(`/Events`);
      });
    }
  };
  return (
    <div>
      <form onSubmit={(e) => handleClick(e)}>
        <div className="form-group">
          <label htmlFor="name">Name this event!</label>

          <input
            type="text"
            className="form-control"
            value={formInput.name || ""}
            aria-describedby="event name"
            placeholder="Enter name for event"
            onChange={(e) => handleChange(e)}
            name="name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="typeOfEvent">What type of Event is this?</label>

          <input
            type="text"
            className="form-control"
            value={formInput.typeOfEvent || ""}
            placeholder="Enter event type"
            onChange={(e) => handleChange(e)}
            name="typeOfEvent"
          />
        </div>

        <div className="form-group">
          <label htmlFor="venu">Name of Venu</label>

          <input
            type="text"
            className="form-control"
            value={formInput.venu || ""}
            placeholder="Enter Venu Name"
            onChange={(e) => handleChange(e)}
            name="venu"
          />
        </div>
        <div className="form-group">
          <label htmlFor="venuPhone">Venu's Phone Number</label>

          <input
            type="text"
            className="form-control"
            value={formInput.venuPhone || ""}
            placeholder="Venu Phone Number"
            onChange={(e) => handleChange(e)}
            name="venuPhone"
          />
        </div>

        <div className="form-group">
          <label htmlFor="venuAddress">Venu's address</label>

          <input
            type="text"
            className="form-control"
            value={formInput.venuAddress || ""}
            placeholder="Enter venu's address"
            onChange={(e) => handleChange(e)}
            name="venuAddress"
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date of Event</label>

          <input
            type="text"
            className="form-control"
            value={formInput.date || ""}
            placeholder="Date of Event"
            onChange={(e) => handleChange(e)}
            name="date"
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time of Event</label>

          <input
            type="text"
            className="form-control"
            value={formInput.time || ""}
            placeholder="Enter Time of Event"
            onChange={(e) => handleChange(e)}
            name="time"
          />
        </div>
        <div className="form-group">
          <label htmlFor="miles">How many miles away is the venu?</label>

          <input
            type="text"
            className="form-control"
            value={formInput.miles || ""}
            placeholder="Miles to venu"
            onChange={(e) => handleChange(e)}
            name="miles"
          />
        </div>
        <div className="form-group">
          <label htmlFor="pricePerMile">What to charge price per mile?</label>

          <input
            type="text"
            className="form-control"
            value={formInput.pricePerMile || ""}
            placeholder="price per mile "
            onChange={(e) => handleChange(e)}
            name="pricePerMile"
          />
        </div>
        <div className="form-group">
          <label htmlFor="notes">Any additional notes?</label>

          <input
            type="text"
            className="form-control"
            value={formInput.notes || ""}
            placeholder="example: Catering drop off located behind building"
            onChange={(e) => handleChange(e)}
            name="notes"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {obj.id ? "Update Event" : "Add Event"}
        </button>
      </form>
    </div>
  );
}
