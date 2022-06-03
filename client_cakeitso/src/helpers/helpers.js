import { getAuth } from "@firebase/auth";
import { getCakesByUserId } from "../api/cakeData";
import { getCustomersByUserId } from "../api/customerData";
import { getEventsByUserId } from "../api/eventData";

const auth = getAuth();
const getCurrentUsersUid = () => auth.currentUser?.uid;

const totalNumOfOrders = (uid) => {
  getCustomersByUserId(uid).then((array) => {
    return array.length;
  });
};

const totalMoneyEarned = (uid) => {
    const events = getEventsByUserId(uid); 
    
}



export default getCurrentUsersUid;
