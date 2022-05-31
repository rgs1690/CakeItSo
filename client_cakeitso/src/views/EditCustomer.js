import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCustomerbyId } from '../api/customerData';
import CustomerForm from '../components/CustomerForm';

export default function EditCustomer() {
    const [editCustomer, setEditCustomer] = useState();
    const { key } = useParams();
useEffect(() => {
    getCustomerbyId(key).then(setEditCustomer);
}, [])

  return (
    <div>
        <CustomerForm obj={editCustomer} />
    </div>
  )
}
