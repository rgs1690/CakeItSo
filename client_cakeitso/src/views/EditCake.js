import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCakebyId } from '../api/cakeData';
import EditCakeForm from '../components/EditCakeForm';


export default function EditCake() {
    const [editCake, setEditCake] = useState();
    const { key } = useParams();
useEffect(() => {
    getCakebyId(key).then((res)=> setEditCake(res));
    
}, [])

  return (
    <div>
        <EditCakeForm obj={editCake} />
    </div>
  )
}
