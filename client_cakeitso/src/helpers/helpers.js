import { getAuth } from "@firebase/auth";
import { getCakesByUserId } from "../api/cakeData";
import { getCustomersByUserId } from "../api/customerData";
import { getEventsByUserId } from "../api/eventData";

const auth = getAuth();
const getCurrentUsersUid = () => auth.currentUser?.uid;




export default getCurrentUsersUid;
