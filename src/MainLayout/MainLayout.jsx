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
    <BrowserRouter basename="/KenteRide">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/vehiclelisting" element={<GhanaRideVehicleListing />} />
        <Route path="/booking" element={<BookingScreen />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default MainLayout;
