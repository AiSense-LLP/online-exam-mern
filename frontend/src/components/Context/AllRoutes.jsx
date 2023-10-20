import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import React from 'react'

import { Login } from "../login/Login";
import Contact from "../Contact";
import Hero from "../Hero";

const AllRoutes = () => {
    <Routes>
  
      <Route path="/"  element={<Hero />} > </Route>
      <Route path="/login" element={<Login />} > </Route>
      <Route path="/contact"  element={<Contact />} ></Route>
      
    </Routes>
}

export default AllRoutes
