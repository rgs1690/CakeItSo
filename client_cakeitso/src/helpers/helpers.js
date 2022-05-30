import firebase from "firebase/compat/app";
import { initializeApp } from "@firebase/app";

import firebaseConfig from "../auth/apiKeys";
import { getAuth } from "@firebase/auth";

const auth = getAuth()

const getCurrentUsersUid = () => auth.currentUser?.uid;

export default getCurrentUsersUid;

