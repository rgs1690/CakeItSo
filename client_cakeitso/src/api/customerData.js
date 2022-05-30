import axios from 'axios';


const baseURL = 'https://localhost:7139/api';

const getAllCustomers = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/customers`)
      .then((response) => resolve(Object.values(response.data)))
      .catch(reject);
  });
  const getCustomerbyId = (id) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/customers/${id}`)
      .then((response) => resolve(response.data))
      .catch(reject);
  });
      export { getAllCustomers, getCustomerbyId }; 