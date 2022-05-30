import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function StartHere() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/CustomerForm`);
  }
  return (
    <div>
      <h1>Start Here</h1>
      <button type="button" className="btn btn-success" onClick={handleClick}>Add a Customer</button>
      </div>
  )
}
