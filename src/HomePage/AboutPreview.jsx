import React from "react";
import image4 from "../assets/image15.png"
import image5 from "../assets/image16.png"
import image6 from "../assets/image17.png"

function AboutPreview(){
    return(
<>


    <section id="about" className="px-6 md:px-12 py-16 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      <div className="grid grid-cols-2 gap-3 relative">
         <img
    src={image4}
    alt="Consultation"
    className="row-span-2 rounded-md object-cover w-full h-full"
  />
         <img
    src={image5}
    alt="Doctors talking"
    className="rounded-md object-cover w-full h-48"
  />
        <img
    src={image6}
    alt="Doctor writing notes"
    className="rounded-md object-cover w-full h-48"
  />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-lg border-4 border-white text-center">
            <span className="text-[#8DC63F] font-bold text-xs">HOKU</span>
            <span className="text-[#1B4F8C] font-bold text-xs">HEALTH CARE</span>
          </div>
        </div>
      </div>


      <div className="px-6">
          <p className="text-[#8DC63F] font-semibold text-sm tracking-widest mb-2 hover:underline">ABOUT US</p>
        <h2 className="text-3xl font-extrabold mb-4">NOURISHING LIVES, ONE<br />HOME AT A TIME</h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          Access to quality healthcare is a fundamental right that every individual deserves. In
          today's society, healthcare systems play a crucial role in ensuring the well-being of
          communities. However, disparities in healthcare access and outcomes persist, often
          disproportionately affecting marginalized populations. Efforts to address these
          disparities must include initiatives to improve access to healthcare services.
        </p>
        <button className="bg-[#1B4F8C] text-white px-7 py-3 rounded font-semibold text-xs tracking-wide hover:bg-[#163f70]">
          Learn More
        </button>
      </div>
    </section>



</>
        
    )
}

export default AboutPreview