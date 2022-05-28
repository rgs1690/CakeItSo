import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getAllCakes = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/cakes`)
      .then((response) => resolve(Object.values(response.data)))
      .catch(reject);
  });
  const getCakesbyId = (id) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/cakes/${id}`)
      .then((response) => resolve(response.data))
      .catch(reject);
  });
      export { getAllCakes, getCakesbyId }; 