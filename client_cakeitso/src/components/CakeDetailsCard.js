import React from "react";
import Proptypes from "prop-types";

export default function CakeDetailsCard({ cake }) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={cake.refImage} className="card-img-top" alt="cake" />
        <div className="card-body">
          <h5 className={cake.name}>Card title</h5>
          <p className="card-text">
            cake date <br />
            {cake.recipe} <br />
            {cake.pricePerServing} <br />
            total Price
          </p>
          <a href="#" className="btn btn-primary">
            View Customer Info
          </a>
          <a href="#" className="btn btn-primary">
            View Event Details
          </a>
          <a href="#" className="btn btn-primary">
            Update Cake
          </a>
          <a href="#" className="btn btn-primary">
            Delete Cake
          </a>
        </div>
      </div>
    </div>
  );
}
CakeDetailsCard.propTypes = {
  cake: Proptypes.shape({}),
};
