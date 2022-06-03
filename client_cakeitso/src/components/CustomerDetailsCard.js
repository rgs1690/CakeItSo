import React, { useState, useEffect } from "react";
import Proptypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { deleteEventsCakesThenCustomer } from "../api/customerData";
import { getSingleCakeByCustomerId } from "../api/cakeData";
import { getSingleEventByCustomerId } from "../api/eventData";

export default function CustomerDetailsCard({ customer }) {
  const [cake, setCake] = useState({});
  const [event, setEvent] = useState({});
  const navigate = useNavigate();
  
  const handleCustomerCakes = () => {
    navigate(`/CustomerCakes/${customer.id}`)
  }
  const handleCustomerEvents = () => {
    navigate(`/CustomerEvents/${customer.id}`)
  }
  const handleUpdate = () => {
    navigate(`/EditCustomer/${customer.id}`)
  }
  const handleDelete = () => {
    deleteEventsCakesThenCustomer(customer.id, cake.id, event.id, customer.userId).then(() => {
      navigate(`/customers`);
    });
  }
    useEffect(() => {
      getSingleCakeByCustomerId(customer.id).then((res) => {
        setCake(res)});
        console.log(cake.id)
      getSingleEventByCustomerId(customer.id).then(setEvent);
    }, [customer])
  return (
    <>

      <div>
        <div class="card" style={{width: "18rem"}}>
          <div class="card-body">
            <h5 class="card-title">{customer.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{customer.phone}</h6>
            <h6 class="card-subtitle mb-2 text-muted">{customer.email}</h6>
            <button type="button" onClick={handleUpdate} class="btn btn-primary">
              Update Customer
            </button>
            <button type="button" onClick={handleCustomerCakes} class="btn btn-primary">
              View Their Cakes
            </button>
            <button type="button" onClick={handleCustomerEvents}class="btn btn-primary">
            View Their Events
            </button>
            <button type="button" onClick={handleDelete} class="btn btn-danger">
            Delete Customer
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
CustomerDetailsCard.propTypes = {
    customer: Proptypes.shape({}),
}