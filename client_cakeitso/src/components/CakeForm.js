import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import getCurrentUsersUid from "../helpers/helpers";
import { getCustomerbyId } from "../api/customerData";
import { createCake } from "../api/cakeData";

const currentUser = getCurrentUsersUid();
const initialState = {
  userId: currentUser,
  name: "",
  customerId: "",
  recipe: "",
  foodCostPerServing: 0,
  numOfGuests: 0,
  decorTime: 0,
  bakeTime: 0,
  wagePerHour: 0,
  supplyCosts: 0,
  refImage: "",
  totalCost: 0,
};
export default function CakeForm(obj = {}) {
  const [formInput, setFormInput] = useState(initialState);
  const [customer, setCustomer] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    getCustomerbyId(id).then(setCustomer);
    if (obj.id) {
      setFormInput({
        userId: obj.userId,
        name: obj.name,
        customerId: obj.customerId,
        recipe: obj.recipe,
        foodCostPerServing: obj.foodCostPerServing,
        numOfGuests: obj.numOfGuests,
        decorTime: obj.decorTime,
        bakeTime: obj.bakeTime,
        wagePerHour: obj.wagePerHour,
        supplyCosts: obj.supplyCosts,
        refImage: obj.refImage,
        totalCost: obj.totalCost,
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
  const totalCost = () => {
    const answer = (formInput.foodCostPerServing * formInput.numOfGuests)
     + 
    ((formInput.bakeTime + formInput.decorTime) * formInput.wagePerHour)
    + formInput.supplyCosts; 
    return answer; 
  }
  const handleClick = (e) => {
    e.preventDefault();
   if(obj.id){
     console.log(obj.id);
   } else {
     createCake({
       ...formInput,
      userId: currentUser,
      customerId: customer.id,
      totalCost: totalCost(), 
     }).then((id) => {
       console.log(id)
       resetForm(); 
       navigate(`/EventForm/${id}`)
     })
   }
 
  }
  return <div>
    <form onSubmit={handleClick}>
    <div className="form-group">
      <label htmlFor="name">Name this cake!</label>

      <input
        type="text"
        className="form-control"
        value={formInput.name || ""}
        aria-describedby="cake name"
        placeholder="Enter name for cake"
        onChange={(e) => handleChange(e)}
        name="name"
      />
    </div>

    <div className="form-group">
      <label htmlFor="recipe">List Recipe for Cake and Frosting</label>

      <input
        type="text"
        className="form-control"
        value={formInput.recipe || ""}
        placeholder="Enter Recipe"
        onChange={(e) => handleChange(e)}
        name="recipe"
      />
    </div>

    <div className="form-group">
      <label htmlFor="foodCostPerServing">Food Cost Per Serving</label>

      <input
        type="text"
        className="form-control"
        value={formInput.foodCostPerServing || ""}
        placeholder="Enter Cost per Serving"
        onChange={(e) => handleChange(e)}
        name="foodCostPerServing"
      />
    </div>
    <div className="form-group">
      <label htmlFor="numOfGuests">Number of Guests</label>

      <input
        type="text"
        className="form-control"
        value={formInput.numOfGuests || ""}
        placeholder="Number of Guests Eating Cake"
        onChange={(e) => handleChange(e)}
        name="numOfGuests"
      />
      </div>

<div className="form-group">
      <label htmlFor="decorTime">Estimate How Many Hours to Decorate</label>

      <input
        type="text"
        className="form-control"
        value={formInput.decorTime || ""}
        placeholder="Enter # of hours to decorate"
        onChange={(e) => handleChange(e)}
        name="decorTime"
      />
    </div>
    <div className="form-group">
      <label htmlFor="bakeTime">Estimate How Many Hours to Bake</label>

      <input
        type="text"
        className="form-control"
        value={formInput.bakeTime || ""}
        placeholder="Enter # of hours to bake"
        onChange={(e) => handleChange(e)}
        name="bakeTime"
      />
    </div>
    <div className="form-group">
      <label htmlFor="wagePerHour">How much are you charging per hour?</label>

      <input
        type="text"
        className="form-control"
        value={formInput.wagePerHour || ""}
        placeholder="Enter Wage per Hour"
        onChange={(e) => handleChange(e)}
        name="wagePerHour"
      />
    </div><div className="form-group">
      <label htmlFor="supplyCost">How much were all other supplies used?</label>

      <input
        type="text"
        className="form-control"
        value={formInput.supplyCosts || ""}
        placeholder="Enter extra supply costs"
        onChange={(e) => handleChange(e)}
        name="supplyCosts"
      />
    </div>
    <div className="form-group">
      <label htmlFor="refImage">Enter Url for what Customer wants cake to look like</label>

      <input
        type="text"
        className="form-control"
        value={formInput.refImage || ""}
        placeholder="Enter URL "
        onChange={(e) => handleChange(e)}
        name="refImage"
      />
    </div>

    <button type="submit" className="btn btn-primary">
      {obj.id ? "Update Cake" : "Add Cake"}
    </button>
  </form>
  </div>;
}
