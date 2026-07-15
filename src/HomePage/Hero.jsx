import React from "react";
import image from "../assets/image11.png"


function Hero() {
  const specialists = ["Child Specialist", "Gynecologist", "Dental Specialist", "Dermatologist"];

  return (
    <section id="home" className="px-6 md:px-12 pt-10 pb-24 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
        <div>
          <p className="text-3xl mb-1 italic" style={{ fontFamily: "'Brush Script MT', cursive" }}>
            We take
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            CARE <span className="text-[#1B4F8C]">OF YOUR</span><br />
            <span className="text-black">HEALTH</span>
          </h1>
          <h3 className="text-[#1B4F8C] font-bold mt-6 mb-2 tracking-wide">OUR SPECIALIST</h3>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm text-gray-600 mb-6">
            {specialists.map((s) => (
              <li key={s}>• {s}</li>
            ))}
          </ul>
          <button className="bg-[#1B4F8C] text-white px-7 py-3 rounded font-semibold text-xs tracking-wide hover:bg-[#163f70]">
            Get Started
          </button>
        </div>

           <div className="bg-gray-100/90 text-blue-800 text-xs md:text-sm font-bold tracking-[0.2em] px-5 py-3 inline-block shadow-sm">
              HEALTH SERVICE
  <img src={image} class="relative z-10 -mb-20 rounded-md" />
      </div>
      </div>

      <div className="mt-12">
        <svg viewBox="0 0 1440 100" className="w-full h-16">
          <path fill="#8DC63F" d="M0,50 C360,120 1080,-20 1440,50 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </section>
  );
}
export default Hero