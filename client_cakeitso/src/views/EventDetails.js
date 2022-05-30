import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getEventById } from '../api/eventData';
import EventDetailsCard from '../components/EventDetailsCard';

export default function EventDetails() {
  const [singleEvent, setSingleEvent] = useState({});
  const { key } = useParams();

  useEffect(() => {
    getEventById(key).then((res) => (setSingleEvent(res)))
  }, [])
  return (
    <div>
      < EventDetailsCard event={singleEvent}/>
      </div>
  )
}
