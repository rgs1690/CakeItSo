import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCakebyId } from '../api/cakeData';
import CakeDetailsCard from '../components/CakeDetailsCard';

export default function CakeDetails() {
  const [singleCake, setSingleCake] = useState({});
  const { key } = useParams();

  useEffect(() => {
    getCakebyId(key).then((res) => (setSingleCake(res)))
  }, [])
  return (
    <div>
      < CakeDetailsCard cake={singleCake} />
      </div>
  )
}
