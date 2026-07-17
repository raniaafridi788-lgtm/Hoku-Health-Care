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
}

export default App;