import React, { useEffect, useState } from 'react'
import { getAllCakes } from '../api/cakeData';
import CakeCard from '../components/CakeCard'
export default function Cakes() {
  const [cakes, setCakes] = useState();
  useEffect(() => {
    getAllCakes().then((cakeArray) => {
      setCakes(cakeArray);
    });
  }, [])
  
  return (
  <>
  <h1>Your Cakes</h1>
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
