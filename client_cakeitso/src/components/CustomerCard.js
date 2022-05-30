import React from 'react'
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
export default function CustomerCard({ customer }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/CustomerDetails/${customer.id}`);
  }
  const handleCustomerCakes = () => {
    navigate(`/CustomerCakes/${customer.id}`)
  }
  return (
  <>
    <div className="card" >
    <div className="card-body">
      <h5 className="card-title">{customer.name}</h5>
      <button type='button' className="btn btn-primary" onClick={handleClick}>View Details</button>
      <button type='button' className="btn btn-info" onClick={handleCustomerCakes}>View Their Cakes</button>
      <a href="#" className="btn btn-primary">Their Events</a>
    </div>
  </div>
  </>
  )
}
CustomerCard.propTypes = {
  customer : PropTypes.shape({})
}; 