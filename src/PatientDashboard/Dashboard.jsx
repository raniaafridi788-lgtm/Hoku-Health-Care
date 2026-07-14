import React from "react";
import {
  Users,
  Stethoscope,
  CalendarCheck,
  Star,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Clock,
} from "lucide-react";

// ---- Mock data (replace with API data later) ----
const stats = [
  {
    label: "Total Patients",
    value: "2,481",
    delta: "+8.2%",
    trend: "up",
    icon: Users,
    tint: "bg-teal-50 text-teal-600",
  },
  {
    label: "Active Doctors",
    value: "37",
    delta: "+2",
    trend: "up",
    icon: Stethoscope,
    tint: "bg-amber-50 text-amber-600",
  },
  {
    label: "Today's Appointments",
    value: "64",
    delta: "-3.1%",
    trend: "down",
    icon: CalendarCheck,
    tint: "bg-rose-50 text-rose-600",
  },
  {
    label: "Avg. Rating",
    value: "4.8",
    delta: "+0.2",
    trend: "up",
    icon: Star,
    tint: "bg-emerald-50 text-emerald-600",
  },
];

const recentAppointments = [
  { patient: "Ayesha Khan", doctor: "Dr. Bilal Ahmed", time: "10:30 AM", status: "Confirmed" },
  { patient: "Hamza Tariq", doctor: "Dr. Sana Malik", time: "11:00 AM", status: "Pending" },
  { patient: "Fatima Noor", doctor: "Dr. Imran Shah", time: "12:15 PM", status: "Confirmed" },
  { patient: "Usman Ali", doctor: "Dr. Bilal Ahmed", time: "01:45 PM", status: "Cancelled" },
];

const statusStyles = {
  Confirmed: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Pending: "bg-amber-50 text-amber-700 ring-amber-200",
  Cancelled: "bg-rose-50 text-rose-700 ring-rose-200",
};

// Simple weekly bar chart driven purely by CSS heights — no chart lib needed
const weekly = [40, 55, 35, 70, 60, 45, 80];
const weekLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-1">
        <span className="text-xs font-semibold uppercase tracking-widest text-teal-600">
          Overview
        </span>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
            Good morning, Admin
          </h1>
          <div className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm text-slate-500 ring-1 ring-slate-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Live clinic status
          </div>
        </div>
        <p className="text-slate-500 text-sm">
          Here's what's happening across Hoku Health Care today.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        {stats.map(({ label, value, delta, trend, icon: Icon, tint }) => (
          <div
            key={label}
            className="rounded-2xl bg-white p-5 ring-1 ring-slate-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className={`rounded-xl p-2.5 ${tint}`}>
                <Icon size={20} strokeWidth={2} />
              </div>
              <span
                className={`inline-flex items-center gap-1 text-xs font-semibold ${
                  trend === "up" ? "text-emerald-600" : "text-rose-600"
                }`}
              >
                {trend === "up" ? (
                  <ArrowUpRight size={14} />
                ) : (
                  <ArrowDownRight size={14} />
                )}
                {delta}
              </span>
            </div>
            <p className="mt-4 text-2xl font-bold text-slate-900">{value}</p>
            <p className="text-sm text-slate-500">{label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly appointments chart */}
        <div className="lg:col-span-2 rounded-2xl bg-white p-6 ring-1 ring-slate-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-semibold text-slate-900">Appointments this week</h2>
              <p className="text-sm text-slate-500">Booked vs. completed sessions</p>
            </div>
            <Activity size={18} className="text-teal-600" />
          </div>
          <div className="flex items-end justify-between gap-3 h-40">
            {weekly.map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex items-end justify-center h-32">
                  <div
                    className="w-full max-w-[28px] rounded-t-lg bg-gradient-to-t from-teal-600 to-teal-400"
                    style={{ height: `${h}%` }}
                  />
                </div>
                <span className="text-xs text-slate-400">{weekLabels[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent appointments list */}
        <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-slate-900">Recent Appointments</h2>
            <Clock size={16} className="text-slate-400" />
          </div>
          <ul className="space-y-4">
            {recentAppointments.map((a, i) => (
              <li key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 shrink-0 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-semibold">
                    {a.patient
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-800">{a.patient}</p>
                    <p className="text-xs text-slate-500">{a.doctor} · {a.time}</p>
                  </div>
                </div>
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ring-1 ${statusStyles[a.status]}`}
                >
                  {a.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}