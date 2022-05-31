import axios from "axios";

const baseURL = "https://localhost:7139/api";

const getAllCustomers = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/customers`)
      .then((response) => resolve(Object.values(response.data)))
      .catch(reject);
  });
const getCustomersByUserId = (userId) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/customers/user/${userId}`)
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
const createCustomer = (newCustomer) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${baseURL}/customers`, newCustomer)
      .then((response) => {
        resolve(response.data.id);
      })
      .catch(reject);
  });
const updateCustomer = (customerObj) =>
  new Promise((resolve, reject) => {
    axios
      .put(`${baseURL}/customers/${customerObj.id}`, customerObj)
      .then(() => getCustomersByUserId(customerObj.userId).then(resolve))
      .catch(reject);
  });
export {
  getAllCustomers,
  getCustomerbyId,
  getCustomersByUserId,
  createCustomer,
  updateCustomer,
};
