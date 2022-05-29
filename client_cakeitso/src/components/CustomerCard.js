import React from 'react'
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
export default function CustomerCard({ customer }) {
  const navigate = useNavigate();

  return (
  <>
    <div className="card" >
    <div className="card-body">
      <h5 className="card-title">{customer.name}</h5>
      <a href="#" className="btn btn-primary">View Details</a>
      <a href="#" className="btn btn-primary">Their Cakes</a>
      <a href="#" className="btn btn-primary">Their Events</a>
    </div>
  </div>
  </>
  )
}
CustomerCard.propTypes = {
  customer : PropTypes.shape({})
}; 