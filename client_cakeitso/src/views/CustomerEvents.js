import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCustomerbyId } from '../api/customerData';
import { getEventsByCustomerId } from '../api/eventData';
import EventCard from '../components/EventCard';
export default function CustomerEvents() {
  const [events, setEvents] =useState();
  const [customer, setCustomer] =useState({});
  const { key } = useParams();
  useEffect(() => {
    getEventsByCustomerId(key).then((eventArray) => {
      setEvents(eventArray);
      getCustomerbyId(key).then((res) => setCustomer(res));
    })
  }, [])
  return( 
    <>
    <h1>{customer.name}'s Events</h1>
    {events ? (
      <> 
      {events?.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      </>
    ) : (
      <h2>They have no events</h2>
    )}
    
    </>
  )
}
