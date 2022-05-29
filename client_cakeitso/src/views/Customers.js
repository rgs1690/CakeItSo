import React, { useEffect, useState } from 'react';
import { getAllCustomers } from '../api/customerData';
import CustomerCard from '../components/CustomerCard';

export default function Customers() {
const [customers, setCustomers] = useState();

useEffect(() => {
  getAllCustomers().then((array) => {
    setCustomers(array);
  });

}, []);
  return (
    <div>
      <h1>Your Customers</h1>
      {customers ? (
          <>
          {customers?.map((customer) => (
            <CustomerCard key={customer.id} customer = {customer} setCustomers={setCustomers} />
          ))}
          </>

      ): (
        <h2> You don't have any customers yet</h2>
      )}

    </div>
  );
}
