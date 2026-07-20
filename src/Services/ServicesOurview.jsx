import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { servicesDetail } from "./ServicesDetail";

const palette = {
  ink: "#10233B",
  link: "#1D4E8F",
  muted: "#5B6B7C",
  hairline: "#E5EAF0",
  teal: "#0E7C86",
};

function ServiceOurview() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = servicesDetail[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-semibold">Service not found</h2>

        <Link
          to="/"
          className="underline"
          style={{ color: palette.link }}
        >
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white">
      {/* Left Side */}
      <div className="flex flex-col justify-center px-10 lg:px-20 py-16">
        <h1
          className="text-4xl lg:text-5xl font-bold mb-4"
          style={{ color: palette.ink }}
        >
          {service.title}
        </h1>

        <p
          className="text-lg mb-5"
          style={{ color: palette.muted }}
        >
          {service.summary}
        </p>

        <p
          className="leading-8 mb-8"
          style={{ color: palette.ink }}
        >
          {service.description}
        </p>

        {service.prep && (
          <>
            <h3
              className="text-xl font-semibold mb-3"
              style={{ color: palette.teal }}
            >
              Preparation
            </h3>

            <ul className="space-y-3 mb-8">
              {service.prep.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </>
        )}

        <Link
  to={`/book?service=${slug}`}

    className="inline-flex items-center justify-center w-44 h-11 rounded-full text-white text-sm font-medium hover:opacity-90 transition"
  style={{ backgroundColor: palette.teal }}
>
  Book Appointment
</Link>

        <button
          onClick={() => navigate(-1)}
          className="mt-6 text-left hover:underline"
          style={{ color: palette.link }}
        >
          ← Back to Services
        </button>
      </div>

      {/* Right Side */}
      <div className="h-72 md:h-auto">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default ServiceOurview;