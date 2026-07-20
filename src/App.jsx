<<<<<<< HEAD
import Navbar from "./HomePage/Navbar"
import Hero from "./HomePage/Hero"
import AboutPreview from "./HomePage/AboutPreview"
import servicesHome from "./HomePage/ServicesHome"
import Services from "./Services/Services"
import ServicesPage from "./Services/ServicesPage"
import ServiceOurview from "./Services/ServicesOurview"
import { Routes, Route} from "react-router-dom";
import PatientAppointmentForm from "./Form/PatientAppointmentForm";
import ContactUs from "./ContactUs/ContactUs";
import ServicesHome from "./HomePage/ServicesHome"


function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesHome />
    </>
  );
}


function App() {
 

  return (
   <>
   <Navbar/>
  
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceOurview />} />
        <Route path="/book" element={<PatientAppointmentForm />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </> 
  )
=======
import React from "react";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection"; // Yeh line add karein

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection /> {/* Yeh line add karein */}
    </div>
  );
>>>>>>> e1e732d9e61f82dee304f4a0d5fec6547ae8f067
}

export default App