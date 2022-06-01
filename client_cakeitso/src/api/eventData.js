import axios from "axios";
import { deleteCake } from "./cakeData";

const baseURL = "https://localhost:7139/api";

const getAllEvents = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/events`)
      .then((response) => resolve(Object.values(response.data)))
      .catch(reject);
  });
const getEventsByUserId = (userId) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/events/user/${userId}`)
      .then((response) => resolve(Object.values(response.data)))
      .catch(reject);
  });
const getEventById = (id) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/events/${id}`)
      .then((response) => resolve(response.data))
      .catch(reject);
  });
const getEventsByCustomerId = (customerId) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/events/customer/${customerId}`)
      .then((response) => resolve(Object.values(response.data)))
      .catch(reject);
  });
const createEvent = (newEvent) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${baseURL}/events`, newEvent)
      .then((response) => {
        resolve(response.data);
      })
      .catch(reject);
  });
const updateEvent = (eventObj) =>
  new Promise((resolve, reject) => {
    axios
      .put(`${baseURL}/events/${eventObj.id}`, eventObj)
      .then(() => getEventsByUserId(eventObj.userId).then(resolve))
      .catch(reject);
  });
  const deleteEvent = ( id, userId) => 
  new Promise((resolve, reject) => {
    axios
      .delete(`${baseURL}/events/${id}`)
      .then(() => getEventsByUserId(userId).then(resolve))
      .catch(reject);
  });
  const getEventsByCakeId = (cakeId) => 
  new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/events/cake/${cakeId}`)
      .then((response) => resolve(Object.values(response.data))) 
      .catch(reject);
  });

  const deleteEventsWithCakeId = (cakeId, userId) => 
  new Promise((resolve, reject) => [
    getEventsByCakeId(cakeId).then((eventArray) => {
      console.log(cakeId, eventArray);
      const deleteEvents = eventArray.map(((event) => deleteEvent(userId, event.id)));
    Promise.all(deleteEvents).then(() => resolve(deleteCake(cakeId, userId)))
    })
    .catch(reject)
  ]); 
export {
  getAllEvents,
  getEventById,
  getEventsByUserId,
  getEventsByCustomerId,
  createEvent,
  updateEvent,
  deleteEvent, 
  deleteEventsWithCakeId
};
