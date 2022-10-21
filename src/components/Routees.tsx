import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";



import NavBar from './NavBar/NavBar';
import Flight from './Flight/Flight';
import FlightItem from './FlightItem/FlightItem'


const Routees = () => {
  return (
   
    <BrowserRouter>
      <NavBar/>
      <div className="container p-4">
        <Routes>
          <Route path="/" element={<Flight />} />
          <Route path="FlightItem" element={<FlightItem />} />
        </Routes>
      </div>
    </BrowserRouter>
   
  )
}

export default Routees