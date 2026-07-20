import React from "react";
import { Link } from "react-router-dom";

 function Navbar() {
  return (
    <header>
      {/* Top contact strip */}
      <div className="hidden md:flex justify-end items-center gap-0 px-8 py-2 text-xs">
        <span className="bg-[#1B4F8C] text-white px-4 py-2 rounded-bl-lg flex items-center gap-1">
          📞 512-258-789
        </span>
        <span className="bg-[#8DC63F] text-white px-4 py-2  flex items-center gap-1">
          ✉ www.hoku-health.com
        </span>
        <span className="bg-[#1B4F8C] text-white px-4 py-2 flex items-center gap-1">
          📍 7537 Wiza Valley, Missouri
        </span>
      </div>

      {/* Main navbar */}
      <nav className="flex flex-wrap justify-between items-center px-6 md:px-12 py-4 border-b">
        <div className="font-bold text-xl leading-tight">
          <span className="text-[#8DC63F]">HOKU</span><br />
          <span className="text-[#1B4F8C]">HEALTH CARE</span>
        </div>
        <div className="hidden lg:flex gap-8 text-sm font-semibold uppercase tracking-wide">
<          Link to="/">Home</Link>
          <span className="hover:text-blue-700">About</span>
          <Link to="/services">Services</Link>
          <span className="hover:text-blue-700">Available</span>
          <span className="hover:text-blue-700">Reviews</span>
         <Link to="/contact">Contact Us</Link>
    
        </div>
        <button className="bg-[#1B4F8C] text-white px-7 py-3 rounded font-semibold text-xs tracking-wide hover:bg-[#163f70]">
          Get Started
        </button>
      </nav>
    </header>
  );
}
export default Navbar