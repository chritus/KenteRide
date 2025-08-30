import React from 'react'
import { BrowserRouter , Route , Routes } from "react-router";
import Home from "../Pages/Home/Home";
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';
import LandingPage from '../Pages/LandingPage/LandingPage'
import GhanaRideVehicleListing from '../Pages/VehicleListing/VehicleListing';
import BookingScreen from '../Pages/BookingPage/BookingPage';


const MainLayout = () => {
  return (
    
    <BrowserRouter>
 {/* navbar */}

   <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/VehicleListing" element={<GhanaRideVehicleListing />} />
      <Route path="/booking" element={<BookingScreen />} />

      {/* not found Pages */}
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default MainLayout;
