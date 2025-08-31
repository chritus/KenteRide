import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ✅ correct package
import Home from '../Pages/Home/Home';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';
import LandingPage from '../Pages/LandingPage/LandingPage';
import GhanaRideVehicleListing from '../Pages/VehicleListing/VehicleListing';
import BookingScreen from '../Pages/BookingPage/BookingPage';
import NotFound from '../Pages/NotFound/NotFound'; // ✅ your real 404 component

const MainLayout = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="kenteRide/" element={<LandingPage />} />
        <Route path="kenteRide/home" element={<Home />} />
        <Route path="kenteRide/vehiclelisting" element={<GhanaRideVehicleListing />} />
        <Route path="kenteRide/booking" element={<BookingScreen />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default MainLayout;
