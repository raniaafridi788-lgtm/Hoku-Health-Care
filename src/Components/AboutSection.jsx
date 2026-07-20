import React from 'react';

const AboutSection = () => {
  return (
    // Main Container: Gray background jo sections ko divide karta hai (Hex: #F5F5F5)
    <section className="bg-[#F5F5F5] py-16 px-6 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE: Image Layout Grid (Reference image ke mutabiq grid setup) */}
        <div className="grid grid-cols-2 gap-4">
          {/* Card 1: Patient Care Image */}
          <div className="rounded-2xl overflow-hidden shadow-md h-48 md:h-64">
            <img 
              src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=400&q=80" 
              alt="Patient Care" 
              className="w-full h-full object-cover" 
            />
          </div>
          {/* Card 2: Professional Doctor Image (Slightly lower alignment design) */}
          <div className="rounded-2xl overflow-hidden shadow-md h-48 md:h-64 mt-6">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80" 
              alt="Medical Consultation" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        {/* RIGHT SIDE: Text Content & Description */}
        <div className="space-y-6">
          {/* Small Tagline with Health Green Underline */}
          <span className="text-[#2E7D32] font-bold text-sm uppercase tracking-widest block border-b-2 border-[#2E7D32] w-20">
            About Us
          </span>
          
          {/* Main Typography Header (Poppins Font Style) */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E] leading-tight font-sans">
            NOURISHING LIVES, ONE HOME AT A TIME
          </h2>
          
          {/* Exact Paragraph Description from Reference Image */}
          <p className="text-[#6B7280] leading-relaxed font-sans text-sm md:text-base text-justify">
            Access to quality healthcare is a fundamental right that every individual deserves. 
            In today's society, healthcare systems play a crucial role in ensuring the well-being of communities. 
            However, disparities in healthcare access and outcomes persist, often disproportionately affecting 
            marginalized populations. Our efforts are focused on bridging these gaps and ensuring quality care is 
            delivered directly to your doorstep.
          </p>
          
          {/* Action Button (Trust Blue Theme: #1565C0) */}
          <button className="bg-[#1565C0] hover:bg-[#0d47a1] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300">
            LEARN MORE
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;