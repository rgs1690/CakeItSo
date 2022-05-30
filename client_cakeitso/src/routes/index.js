import React from 'react'
import { Route, Routes } from 'react-router-dom';
import CakeForm from '../components/CakeForm';
import CustomerForm from '../components/CustomerForm';
import EventForm from '../components/EventForm';
import CakeDetails from '../views/CakeDetails';
import Cakes from '../views/Cakes';
import CustomerCakes from '../views/CustomerCakes';
import CustomerDetails from '../views/CustomerDetails';
import CustomerEvents from '../views/CustomerEvents';
import Customers from '../views/Customers';
import EventDetails from '../views/EventDetails';
import Events from '../views/Events';
import Login from '../views/Login';
import StartHere from '../views/StartHere';
import YourInfo from '../views/YourInfo';

export default function Routing() {
  return (
    <div>
<Routes>
<Route exact path="/Cakes" element={<Cakes />}></Route>
<Route exact path="/CakeDetails/:key" element={<CakeDetails/>}></Route>
<Route exact path="/CakeForm/:id" element={<CakeForm />}></Route>
<Route exact path="/Customers" element={<Customers />}></Route>
<Route exact path="/CustomerCakes/:key" element={<CustomerCakes />}></Route>
<Route exact path="/CustomerDetails/:key" element={<CustomerDetails />}></Route>
<Route exact path="/CustomerEvents/:key" element={<CustomerEvents />}></Route>
<Route exact path="CustomerForm" element={<CustomerForm />}></Route>
<Route exact path="/Events" element={<Events />}></Route>
<Route exact path="/EventDetails/:key" element={<EventDetails />}></Route>
<Route exact path="/EventForm/:id" element={<EventForm/>}></Route>
<Route exact path="/Login" element={<Login />}></Route>
<Route exact path="/YourInfo" element={<YourInfo />}></Route>
<Route exact path="/" element={<StartHere />}></Route>
</Routes>

    </div>
  )
}
