import React from "react";
import Proptypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function CustomerDetailsCard({ customer }) {
  const navigate = useNavigate();
  const handleCustomerCakes = () => {
    navigate(`/CustomerCakes/${customer.id}`)
  }
  return (
    <>

      <div>
        <div class="card" style={{width: "18rem"}}>
          <div class="card-body">
            <h5 class="card-title">{customer.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{customer.phone}</h6>
            <h6 class="card-subtitle mb-2 text-muted">{customer.email}</h6>
            <button type="button" class="btn btn-primary">
              Update Customer
            </button>
            <button type="button" onClick={handleCustomerCakes} class="btn btn-primary">
              View Their Cakes
            </button>
            <button type="button" class="btn btn-primary">
            View Their Events
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