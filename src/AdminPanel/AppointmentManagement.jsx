import React, { useMemo, useState } from "react";
import { Search, Filter, CalendarPlus, MoreVertical, X } from "lucide-react";

const initialAppointments = [
  { id: "APT-101", patient: "Ayesha Khan", doctor: "Dr. Bilal Ahmed", date: "2026-07-14", time: "10:30 AM", status: "Confirmed", type: "General Checkup" },
  { id: "APT-102", patient: "Hamza Tariq", doctor: "Dr. Sana Malik", date: "2026-07-14", time: "11:00 AM", status: "Pending", type: "Dental" },
  { id: "APT-103", patient: "Fatima Noor", doctor: "Dr. Imran Shah", date: "2026-07-14", time: "12:15 PM", status: "Confirmed", type: "Cardiology" },
  { id: "APT-104", patient: "Usman Ali", doctor: "Dr. Bilal Ahmed", date: "2026-07-15", time: "01:45 PM", status: "Cancelled", type: "Dermatology" },
  { id: "APT-105", patient: "Zainab Malik", doctor: "Dr. Sana Malik", date: "2026-07-15", time: "02:30 PM", status: "Confirmed", type: "Pediatrics" },
  { id: "APT-106", patient: "Bilal Hussain", doctor: "Dr. Imran Shah", date: "2026-07-16", time: "09:15 AM", status: "Pending", type: "Orthopedics" },
];

const statusStyles = {
  Confirmed: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Pending: "bg-amber-50 text-amber-700 ring-amber-200",
  Cancelled: "bg-rose-50 text-rose-700 ring-rose-200",
};

const filters = ["All", "Confirmed", "Pending", "Cancelled"];

export default function AppointmentManagement() {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [openMenu, setOpenMenu] = useState(null);

  const filtered = useMemo(() => {
    return appointments.filter((a) => {
      const matchesQuery =
        a.patient.toLowerCase().includes(query.toLowerCase()) ||
        a.doctor.toLowerCase().includes(query.toLowerCase()) ||
        a.id.toLowerCase().includes(query.toLowerCase());
      const matchesFilter = activeFilter === "All" || a.status === activeFilter;
      return matchesQuery && matchesFilter;
    });
  }, [appointments, query, activeFilter]);

  const updateStatus = (id, status) => {
    setAppointments((prev) => prev.map((a) => (a.id === id ? { ...a, status } : a)));
    setOpenMenu(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-600">
            Scheduling
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
            Appointment Management
          </h1>
          <p className="text-sm text-slate-500">
            {filtered.length} of {appointments.length} appointments shown
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-teal-700 transition-colors shadow-sm">
          <CalendarPlus size={16} />
          New Appointment
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row md:items-center gap-3 mb-5">
        <div className="relative flex-1 max-w-sm">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search patient, doctor or ID..."
            className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Filter size={15} className="text-slate-400" />
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                activeFilter === f
                  ? "bg-teal-600 text-white"
                  : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="rounded-2xl bg-white ring-1 ring-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/70 text-left text-xs uppercase tracking-wide text-slate-500">
                <th className="px-5 py-3 font-semibold">Patient</th>
                <th className="px-5 py-3 font-semibold">Doctor</th>
                <th className="px-5 py-3 font-semibold">Type</th>
                <th className="px-5 py-3 font-semibold">Date &amp; Time</th>
                <th className="px-5 py-3 font-semibold">Status</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((a) => (
                <tr key={a.id} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/60">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 shrink-0 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-semibold">
                        {a.patient.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">{a.patient}</p>
                        <p className="text-xs text-slate-400">{a.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-slate-600">{a.doctor}</td>
                  <td className="px-5 py-3.5 text-slate-600">{a.type}</td>
                  <td className="px-5 py-3.5 text-slate-600">
                    {a.date} <span className="text-slate-400">· {a.time}</span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ring-1 ${statusStyles[a.status]}`}>
                      {a.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 relative text-right">
                    <button
                      onClick={() => setOpenMenu(openMenu === a.id ? null : a.id)}
                      className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500"
                    >
                      <MoreVertical size={16} />
                    </button>
                    {openMenu === a.id && (
                      <div className="absolute right-5 top-10 z-10 w-40 rounded-xl bg-white shadow-lg ring-1 ring-slate-200 py-1 text-left">
                        {["Confirmed", "Pending", "Cancelled"].map((s) => (
                          <button
                            key={s}
                            onClick={() => updateStatus(a.id, s)}
                            className="w-full px-3.5 py-2 text-xs text-slate-600 hover:bg-slate-50 text-left"
                          >
                            Mark as {s}
                          </button>
                        ))}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-5 py-10 text-center text-slate-400">
                    <X size={20} className="mx-auto mb-2" />
                    No appointments match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}