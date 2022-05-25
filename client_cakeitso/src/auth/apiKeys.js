import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
    databaseUrl: process.env.REACT_APP_DATABASE_URL,   
    apiKey:process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  };
  const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

