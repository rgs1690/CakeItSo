import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCakesByCustomerId } from '../api/cakeData';
import { getCustomerbyId } from '../api/customerData';
import CakeCard from '../components/CakeCard';

export default function CustomerCakes() {
  const [cakes, setCakes] =useState();
  const [customer, setCustomer] =useState({})
  const { key } = useParams();
  useEffect(() => {
    console.log(key);
    getCakesByCustomerId(key).then((cakeArray) => {
      setCakes(cakeArray);
    getCustomerbyId(key).then((res) => setCustomer(res));
    });
}, [])

  return (
    <>
    <h1>{customer.name}'s Cakes</h1>
    {cakes ? (
        <>
        {cakes?.map((cake) => (
          <CakeCard key={cake.id} cake={cake} />
        ))}
         </>
      ) : (
        <h2> You do not have any cakes yet</h2>
      )}
  </>
  )
}
