import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function CakeCard({ cake }) {
  const navigate = useNavigate();
  return (
    <div class="card" style={{ width: "18rem" }}>
      <div class="card-body">
        <h5 class="card-title">{cake.name}</h5>
      <img src={cake.refImage} class="card-img-top" alt="cake" />
        <p class="card-text">
          <p>Cake Customer</p><br/>
          <p>Date of Event</p>
        </p>
        <a href="#" class="btn btn-primary">
          View Details
        </a>
      </div>
    </div>
  );
}
CakeCard.propTypes = {
  cake: PropTypes.shape({})
};