import React ,{ useState} from 'react'
import Nabvar from './Components/Nabvar'
import Header from './Components/Shared/Header'
import CarRental from './Components/Shared/CarRental'
import CarList from './Components/Shared/Carlist'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CarsData } from './Components/CarsData'
import CarPage from './Components/Shared/Carpage'
import PageRental from './Components/PageRental'
import { loadStripe } from '@stripe/stripe-js';

import Formulario from './Components/Shared/Formulario'
import RedSysIntegration from './Components/Shared/RedSysIntegration'
// import Pago from './Components/Shared/Pago'
// import StripeWrapper from './Components/Shared/StripeWrapper'
import TuComponenteDePago from './Components/Shared/ComponenteDepago'


//Firebase

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);


const firebaseConfig = {
  apiKey: "AIzaSyBuIW2rhrRSunc9CrG_0T4E4MBDIO9O1Lc",
  authDomain: "sevillarentacar-1c41d.firebaseapp.com",
  projectId: "sevillarentacar-1c41d",
  storageBucket: "sevillarentacar-1c41d.appspot.com",
  messagingSenderId: "157155148979",
  appId: "1:157155148979:web:7f6e1734e78c42788e5cc6",
  measurementId: "G-GDQ7DZGFL6"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
 

//  const [cart, setCart] = useState([]);

//  const addToCart = (car) => {
//   setCart([...cart, car]);
// };




  return (
    

<Router>
<div className='App'>
    
    <Nabvar/>




     
       
        <Routes>
      <Route path='/' Component={Header}/>
      <Route path="/CarRental" Component={CarRental}/>  

     
      {CarsData.map((car) => (
      <Route path="/car/:id" element={<PageRental />}/>
      ))}  
      {/* <TuComponenteDePago/> */}

     
             
       
      {/* <Route path="/" element={<CarRental />}></Route>
      {CarsData.map((car) => (
      <Route path="/car/:id" element={<PageRental />}/>npm rn
      ))} */}
      {/* <Route path="/formulario" element={<Formulario ></Formulario>} /> */}
      </Routes>
      </div>
      </Router>

    
 
  )
}

export default App
// App.jsx
// import React, { useState, useEffect } from "react";
// import ProductDisplay from "./Components/ProductDisplay";
// const Message = ({ message }) => (
//   <section>
//     <p>{message}</p>
//   </section>
// );

// export default function App() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     // Check to see if this is a redirect back from Checkout
//     const query = new URLSearchParams(window.location.search);

//     if (query.post("success")) {
//       setMessage("Order placed! You will receive an email confirmation.");
//     }

//     if (query.post("canceled")) {
//       setMessage(
//         "Order canceled -- continue to shop around and checkout when you're ready."
//       );
//     }
//   }, []);

//   return message ? (
//     <Message message={message} />
//   ) : (
//     <ProductDisplay />
//   );
// }
