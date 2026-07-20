import React from "react";
import { Link } from "react-router-dom";
import { servicesDetail } from "./ServicesDetail";

const columns = [
  [
    "general-medicine",
    "cardiology",
    "neurology",
    "orthopedics",
  ],
  [
    "pediatrics",
    "gynecology-obstetrics",
    "general-surgery",
    "dermatology",
  ],
  [
    "emergency-trauma-care",
    "diagnostic-imaging",
    "laboratory-services",
    "physiotherapy-rehabilitation",
  ],
];

const palette = {
  sidebarBg: "#EEF3F7",
  ink: "#10233B",
  link: "#1D4E8F",
  muted: "#5B6B7C",
  hairline: "#E5EAF0",
};

export default function ServicesPage() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-6"
      style={{ background: "#F7F9FA" }}
    >
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
            style={{ color: palette.muted }}
          >
            Explore Our Services
          </p>

          <h1
            className="text-3xl leading-tight mb-6 font-semibold"
            style={{ color: palette.ink }}
          >
            Hospital Departments & Services
          </h1>

          <p
            className="text-[15px] leading-relaxed"
            style={{ color: palette.muted }}
          >
            We provide comprehensive healthcare through experienced physicians,
            advanced medical technology, and compassionate patient care across
            multiple specialties.
          </p>
        </div>

        {/* Services List */}
        <div className="p-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-8">
            {columns.map((column, index) => (
              <ul key={index} className="space-y-6">
                {column.map((slug) => (
                  <li key={slug}>
                    <Link
                      to={`/services/${slug}`}
                      className="text-[15px] font-medium leading-snug hover:underline"
                      style={{ color: palette.link }}
                    >
                      {servicesDetail[slug].title}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          {/* Footer */}
          <div
            className="mt-10 rounded-xl px-5 py-4"
            style={{ border: `1px solid ${palette.hairline}` }}
          >
            <span
              className="text-sm"
              style={{ color: palette.muted }}
            >
              Need help choosing the right department?{" "}
              <a
                href="#"
                className="font-medium hover:underline"
                style={{ color: palette.link }}
              >
                Contact our team
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}