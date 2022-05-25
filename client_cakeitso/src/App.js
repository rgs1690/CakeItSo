import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import auth from "./auth/apiKeys";
import checkUserCreatedInDB from "./auth/checkIfUserCreatedInDB";
import './App.css';
import NavBar from './components/NavBar';
import Routing from './routes';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(async (response) => {
        if (response) {
            const userObj = {
                uid: response.uid,
                fullName: response.displayName,
                profilePic: response.photoURL,
                username: response.email.split('@')[0],
                token: response.accessToken, //you can save the token in an object if you want
            };
            setUser(userObj);
            
            //you can also do this to save the token for later use
            sessionStorage.setItem("token", response.accessToken);

            checkUserCreatedInDB();

        } else {
            setUser(false);
             
            //don't forget to clear the token if using sessionStorage!
            sessionStorage.removeItem("token");

            navigate('/');
        }
    });
}, []);


  return (
    <div>
    <NavBar/>
    <Routing />
    </div>
  );
}

export default App;
