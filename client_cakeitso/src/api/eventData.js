import axios from 'axios';

const baseURL = 'https://localhost:7139/api';

const getAllEvents = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/events`)
      .then((response) => resolve(Object.values(response.data)))
      .catch(reject);
  });

  export default getAllEvents;