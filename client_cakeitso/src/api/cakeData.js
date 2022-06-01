import axios from "axios";

const baseURL = "https://localhost:7139/api";

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
  });
const createCake = (newCake) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${baseURL}/cakes`, newCake)
      .then((response) => {
        resolve(response.data.id);
      })
      .catch(reject);
  });
const updateCake = (cakeObj) =>
  new Promise((resolve, reject) => {
    axios
      .put(`${baseURL}/cakes/${cakeObj.id}`, cakeObj)
      .then(() => getCakesByUserId(cakeObj.userId).then(resolve))
      .catch(reject);
  });

export {
  getAllCakes,
  getCakebyId,
  getCakesByUserId,
  getCakesByCustomerId,
  createCake,
  updateCake,
};
