import React from "react";

/**
 * Hospital Departments & Services
 */

const columns = [
  [
    { title: "General Medicine" },
    { title: "Cardiology" },
    { title: "Neurology" },
    { title: "Orthopedics" },
  ],
  [
    { title: "Pediatrics" },
    { title: "Gynecology & Obstetrics" },
    { title: "General Surgery" },
    { title: "Dermatology" },
  ],
  [
    { title: "Emergency & Trauma Care" },
    { title: "Diagnostic Imaging" },
    { title: "Laboratory Services" },
    { title: "Physiotherapy & Rehabilitation" },
  ],
];

const fonts = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap');
`;

const palette = {
  sidebarBg: "#EEF3F7",
  ink: "#10233B",
  link: "#1D4E8F",
  muted: "#5B6B7C",
  hairline: "#E5EAF0",
};

function Services() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-6"
      style={{ background: "#F7F9FA" }}
    >
      <style>{fonts}</style>

      <div
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-[300px_1fr] rounded-2xl overflow-hidden shadow-xl bg-white"
        style={{ border: `1px solid ${palette.hairline}` }}
      >
        {/* Sidebar */}
        <div
          className="p-10 flex flex-col justify-center"
          style={{ background: palette.sidebarBg }}
        >
          <p
            className="text-xs font-medium tracking-widest uppercase mb-4"
            style={{
              color: palette.muted,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Explore Our Services
          </p>

          <h1
            className="text-3xl leading-tight mb-6"
            style={{
              color: palette.ink,
              fontFamily: "'Fraunces', serif",
              fontWeight: 600,
            }}
          >
            Comprehensive Hospital Services
          </h1>

          <p
            className="text-[15px] leading-relaxed"
            style={{
              color: palette.muted,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Our hospital provides comprehensive healthcare services through
            experienced physicians, skilled specialists, advanced medical
            technology, and compassionate patient care. From preventive care
            and diagnostics to emergency treatment and specialized services,
            we are dedicated to improving the health and well-being of every
            patient.
          </p>
        </div>

        {/* Services List */}
        <div className="p-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-8">
            {columns.map((col, i) => (
              <ul key={i} className="space-y-6">
                {col.map((service, index) => (
                  <li
                    key={index}
                    className="text-[15px] leading-snug font-medium"
                    style={{
                      color: palette.link,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    • {service.title}
                  </li>
                ))}
              </ul>
            ))}
          </div>

          {/* Information Bar */}
          <div
            className="mt-10 rounded-xl px-5 py-4"
            style={{ border: `1px solid ${palette.hairline}` }}
          >
            <p
              className="text-sm leading-relaxed"
              style={{
                color: palette.muted,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Need help finding the right department or medical service? Our
              experienced healthcare team is available to guide you and answer
              any questions about our hospital services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;