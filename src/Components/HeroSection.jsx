import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-white pt-6 pb-16 px-6 md:px-16 lg:px-24">
      {/* 1. Top Contact Info Bar (As shown in the image) */}
      <div className="hidden md:flex justify-end gap-6 text-xs text-white bg-[#1565C0] py-3 px-6 rounded-full mb-10 max-w-max ml-auto shadow-md font-sans">
        <span className="flex items-center gap-1">📞 512-258-7119</span>
        <span className="flex items-center gap-1">📧 WWW.HOKUHEALTH.COM</span>
        <span className="flex items-center gap-1">📍 7537 WIZA VALLEY MISSOURI</span>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* 2. Left Column: Text & Specialist Details */}
        <div className="space-y-6">
          {/* Main Tagline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1A1A2E] leading-tight tracking-tight font-sans">
            We take <br />
            <span className="text-[#2E7D32]">care</span> <span className="text-[#1565C0]">OF YOUR</span> <br />
            HEALTH
          </h1>
          
          {/* Specialists Badges */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-[#1A1A2E] tracking-widest uppercase">
              Our Specialist
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#6B7280]">
              <span className="flex items-center gap-2 font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2E7D32] inline-block"></span> 
                Child Specialist
              </span>
              <span className="flex items-center gap-2 font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2E7D32] inline-block"></span> 
                Gynecologist
              </span>
              <span className="flex items-center gap-2 font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2E7D32] inline-block"></span> 
                Dental Specialist
              </span>
              <span className="flex items-center gap-2 font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2E7D32] inline-block"></span> 
                Dermatologist
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-[#1565C0] hover:bg-[#0d47a1] text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 tracking-wider text-sm">
            GET STARTED
          </button>
        </div>

        {/* 3. Right Column: Doctor Image (Exactly as shown in reference) */}
        <div className="relative flex justify-center">
          <div className="w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-50 relative group">
            {/* Online medical-themed image of elder doctor and younger nurse */}
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80" 
              alt="Hoku Healthcare Doctor and Patient" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;