import React, { useEffect, useState } from 'react'
import  { getCakesByUserId } from '../api/cakeData';
import CakeCard from '../components/CakeCard'
import getCurrentUsersUid from '../helpers/helpers';
export default function Cakes() {
  const [cakes, setCakes] = useState();
  const currentUid = getCurrentUsersUid();
  useEffect(() => {
    console.log(currentUid)
    getCakesByUserId(currentUid).then((cakeArray) => {
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
