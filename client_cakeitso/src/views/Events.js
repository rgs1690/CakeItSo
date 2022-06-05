import React, { useEffect, useState } from 'react';
import { getAllEvents, getEventsByUserId } from '../api/eventData';
import EventCard from '../components/EventCard';
import getCurrentUsersUid from '../helpers/helpers';

export default function Events() {
  const [events, setEvents] = useState([]);
  const currentUser = getCurrentUsersUid();
  useEffect(() => {
    getEventsByUserId(currentUser).then((eventArray) => {
      setEvents(eventArray);
    });

  }, []);
  const passedEvents =[];
  const datePassed = () => {
    events.map((event) => {
     const date = new Date();
      if (new Date(event.date) < date){
        passedEvents.push(event)
      }
      console.log(passedEvents)
      return passedEvents;
    })
  }
  datePassed()
  const orderEventsByDate = () => {
    console.log("btn clicked")
    events.sort((a,b) => {
        const cardOne = a.date;
        const cardTwo = b.date;
        console.log(cardOne, cardTwo)
       return cardOne > cardTwo ? 1 : -1;
    })
}
orderEventsByDate();
  return (
    <div>
      <h1>Your Events</h1>

      {events ? (
        <>
        {events?.map((event) => (
          <EventCard key={event.id} event = {event} />
        ))}
        </>
      ) : (
        <h2> You don't have any events yet </h2>
      )}
    </div>
  );
}
