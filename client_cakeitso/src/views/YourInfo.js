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
  
  return (
    <>
      <h1>YourInfo</h1>
      <h3>Total Number of Orders: {customers.length} </h3>
      <h3>Total Money Earned: ${moneyEarned} </h3>
      <h3>Upcoming Events: </h3>
      <h3>Past Events: </h3>
    </>
  );
}
