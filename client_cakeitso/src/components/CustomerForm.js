import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { createCustomer} from "../api/customerData";
import getCurrentUsersUid from "../helpers/helpers";


const initialState = {
  userId: "",
  name: "",
  phone: "",
  email: "",
};

export default function CustomerForm({ obj = {} }) {
  const [formInput, setFormInput] = useState(initialState);
  const navigate = useNavigate();
  const currentUser = getCurrentUsersUid();
  useEffect(() => {
    console.log(currentUser)
    if(obj.id) {
      setFormInput({
        id: obj.id,
        userId: obj.userId, 
        name: obj.name,
        phone: obj.phone,
        email: obj.email
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
 const handleClick = (e) => {
   e.preventDefault();
  if(obj.id){
    console.log(obj.id);
  } else {
    createCustomer({
      ...formInput,
      userId: currentUser,
    }).then((id) => {
      
      resetForm(); 
      navigate(`/CakeForm/${id}`)
    })
  }

 }


  return (
    <form onSubmit={handleClick}>
    <div className="form-group">
      <label htmlFor="name">Customer Full Name</label>

      <input
        type="text"
        className="form-control"
        value={formInput.name || ""}
        aria-describedby="customer name"
        placeholder="Enter name"
        onChange={(e) => handleChange(e)}
        name="name"
      />
    </div>

    <div className="form-group">
      <label htmlFor="phone">Phone Number</label>

      <input
        type="text"
        className="form-control"
        value={formInput.phone || ""}
        placeholder="Enter Phone Number"
        onChange={(e) => handleChange(e)}
        name="phone"
      />
    </div>

    <div className="form-group">
      <label htmlFor="email">Email</label>

      <input
        type="text"
        className="form-control"
        value={formInput.email || ""}
        placeholder="Enter Email"
        onChange={(e) => handleChange(e)}
        name="email"
      />
    </div>


    <button type="submit" className="btn btn-primary">
      {obj.id ? "Update Customer" : "Add Customer"}
    </button>
  </form>
  )
}
