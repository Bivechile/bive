import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from './Components/Home/Home.js';
import FormComp from './Components/FormComp/index';
import reportWebVitals from './reportWebVitals';
import Step404 from './Components/Page404/index';
import Login from './Components/Login/login';
import Bandeja from './Components/Bandeja/index';
import Cart from './Components/Cart/index';






import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<FormComp />} />
      <Route path="*" element={<Step404 />} />
      <Route path="/form" element={<FormComp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/bandeja" element={<Bandeja />} />
      <Route path="/carrito" element={<Cart />} />
    </Routes>
  </BrowserRouter>,
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
