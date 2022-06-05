import React, { useEffect, useState } from "react";
import { getCustomersByUserId } from "../api/customerData";
import { getEventsByUserId } from "../api/eventData";
import getCurrentUsersUid from "../helpers/helpers";

export default function YourInfo() {
  const currentUser = getCurrentUsersUid();
  const [customers, setCustomers] = useState([]);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getCustomersByUserId(currentUser).then(setCustomers);
    getEventsByUserId(currentUser).then(setEvents);
  }, []);

  const totals = events.map((event) => {
    return event.totalPrice;
  });
  const moneyEarned = totals.reduce((a, b) => a + b, 0);
  const passedEvents =[];
  const upcomingEvents = [];
  const datePassed = () => {
    events.map((event) => {
     const date = new Date();
      if (new Date(event.date) < date){
        passedEvents.push(event)
      } 
      else {
        upcomingEvents.push(event)
      }
    })
  }
  datePassed();
  console.log(passedEvents.length)
  console.log(upcomingEvents)
  return (
    <>
      <h1>YourInfo</h1>
      <h3>Total Number of Orders: {customers.length} </h3>
      <h3>Total Money Earned: ${moneyEarned} </h3>
      <h3>Upcoming Events: {passedEvents.length} </h3>
      <h3>Past Events: {upcomingEvents.length} </h3>
    </>
  );
}
