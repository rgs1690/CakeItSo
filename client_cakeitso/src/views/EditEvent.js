import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getEventById } from '../api/eventData';
import EditEventForm from '../components/EditEventForm';

export default function EditEvent() {
    const [editEvent, setEditEvent] = useState();
    const { key } = useParams();
useEffect(() => {
    getEventById(key).then(setEditEvent);
}, [])

  return (
    <div>
        <EditEventForm obj={editEvent} />
    </div>
  )
}
