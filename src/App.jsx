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
}

export default App