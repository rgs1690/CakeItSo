import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function CakeCard({ cake }) {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log('CLICKED!')
    navigate(`/CakeDetails/${cake.id}`)
    console.log(cake.id)
  };
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{cake.name}</h5>
      <img src={cake.refImage} className="card-img-top" alt="cake" />
        <p className="card-text">
          {cake.customerName}<br/>
        </p>
        <button type="button" onClick={handleClick} className="btn btn-primary">View Details</button>        
      </div>
    </div>
  );
}
CakeCard.propTypes = {
  cake: PropTypes.shape({})
};