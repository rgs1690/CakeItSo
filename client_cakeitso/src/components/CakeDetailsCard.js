import React from "react";
import Proptypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { deleteCake, getCakesByUserId } from "../api/cakeData";
export default function CakeDetailsCard({ cake }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/CustomerDetails/${cake.customerId}`);
  };
  const handleUpdate = () => {
    
    navigate(`/EditCake/${cake.id}`)
  }
  const handleDelete = () => {
    deleteCake(cake.id).then(() => {
      getCakesByUserId(cake.userId).then(() => {
        navigate(`/cakes`)
      })
    })
  }
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={cake.refImage} className="card-img-top" alt="cake" />
        <div className="card-body">
          <h5 className={cake.name}>{cake.name}</h5>
          <p className="card-text">
            Customer: {cake.customerName} <br/>
            Recipe: {cake.recipe} <br />
            Price Per Serving: ${cake.foodCostPerServing} <br />
            Total Cost: ${cake.totalCost}
          </p>
          <button type='button' className="btn btn-primary" onClick={handleClick}>View Customer Info</button>
          
          <a href="#" className="btn btn-primary">
            View Event Details
          </a>
          <button onClick={handleUpdate} className="btn btn-primary">
            Update Cake
          </button>
          <button onClick={handleDelete} className="btn btn-primary">
            Delete Cake
          </button>
        </div>
      </div>
    </div>
  );
}
CakeDetailsCard.propTypes = {
  cake: Proptypes.shape({}),
};
