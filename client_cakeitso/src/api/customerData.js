import axios from "axios";
import { deleteCake, getCakesByCustomerId } from "./cakeData";
import { deleteEvent, getEventsByCakeId } from "./eventData";

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
const deleteCustomer = (id, userId) =>
  new Promise((resolve, reject) => {
    axios
      .delete(`${baseURL}/customers/${id}`)
      .then(() => getCustomersByUserId(userId).then(resolve))
      .catch(reject);
  });
const deleteEventsCakesThenCustomer = (customerId, cakeId, eventId, userId) =>
  new Promise((resolve, reject) => {
    getCakesByCustomerId(customerId).then((cakeArray) => {
      const deletedCakes = cakeArray.map((cake) => deleteCake(cakeId, userId));
      getEventsByCakeId(cakeId).then((eventArray) => {
        const deletedEvents = eventArray.map((event) =>
          deleteEvent(eventId, userId)
        );
        Promise.all([deletedCakes, deletedEvents]).then(() =>
          resolve(deleteCustomer(customerId, userId))
        );
      });
    });
  });

export {
  getAllCustomers,
  getCustomerbyId,
  getCustomersByUserId,
  createCustomer,
  updateCustomer,
  deleteEventsCakesThenCustomer,
};
