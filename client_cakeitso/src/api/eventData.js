import axios from 'axios';

const baseURL = 'https://localhost:7139/api';

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
  })

  export { getAllEvents, getEventById, getEventsByUserId, getEventsByCustomerId };