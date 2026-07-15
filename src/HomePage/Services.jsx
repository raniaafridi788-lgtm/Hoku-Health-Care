import React from "react";
import image1 from "../assets/image12.png"
import image2 from "../assets/image13.png"
import image3 from "../assets/image14.png"


const services = [
  { name: "Home Health", image: image1 },
  { name: "Palliative Care", image: image2  },
  { name: "Hospice Care", image: image3 },
];

 function Services({ items = services }) {
  return (
    <section id="services" className="px-6 md:px-12 py-16 text-center bg-gray-50">
      <p className="text-[#8DC63F] font-semibold text-sm tracking-widest mb-1">HOKU</p>
      <h2 className="text-3xl font-extrabold text-[#1B4F8C] mb-10">OUR SERVICE</h2>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((service) => (
          <div key={service.name}>
            <img
              src={service.image}
              className="rounded-md object-cover h-60 w-full mb-4"
              alt={service.name}
            />
            <div className="border border-gray-300 rounded py-2 px-4 w-fit mx-auto shadow-2xl font-semibold text-sm tracking-wide uppercase">
              {service.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Services