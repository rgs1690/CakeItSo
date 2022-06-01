import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCustomerbyId } from '../api/customerData';
import CustomerDetailsCard from '../components/CustomerDetailsCard';

export default function CustomerDetails() {
  const [singleCustomer, setSingleCustomer] = useState({});
  const { key } = useParams();

  useEffect(() => {
    getCustomerbyId(key).then((res) => (setSingleCustomer(res)))
  }, []);
  
  return (
    <div>
      < CustomerDetailsCard customer={singleCustomer} s/>
      </div>
  )
}
