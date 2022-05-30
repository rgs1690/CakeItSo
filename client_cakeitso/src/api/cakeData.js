import axios from 'axios';

const baseURL = 'https://localhost:7139/api';

const getAllCakes = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/cakes`)
      .then((response) => resolve(Object.values(response.data)))
      .catch(reject);
  });
  const getCakesByUserId = (userId) => 
  new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/cakes/user/${userId}`)
      .then((response) => resolve(Object.values(response.data)))
      .catch(reject);
  });
  const getCakebyId = (id) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/cakes/${id}`)
      .then((response) => resolve(response.data))
      .catch(reject);
  });

const getCakesByCustomerId = (customerId) => 
  new Promise((resolve, reject) => {
    axios 
      .get(`${baseURL}/cakes/customer/${customerId}`)
      .then((response) => resolve(Object.values(response.data)))
      .catch(reject);
  })

      export { getAllCakes, getCakebyId, getCakesByUserId, getCakesByCustomerId }; 