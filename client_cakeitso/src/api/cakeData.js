import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getAllCakes = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/customers`)
      .then((response) => resolve(Object.values(response.data)))
      .catch(reject);
  });

  export default getAllCakes; 