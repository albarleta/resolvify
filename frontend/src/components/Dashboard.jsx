"use client";

import {
  BellIcon,
  HomeIcon,
  ChartBarIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1a2234] text-gray-400">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-[#6366f1]">TROUBLESHOOT</h1>
        </div>
        <nav className="space-y-2 px-4">
          {[
            { name: "Dashboard", icon: HomeIcon, active: true },
            { name: "Analytics", icon: ChartBarIcon },
            { name: "Settings", icon: CogIcon },
            { name: "Help", icon: QuestionMarkCircleIcon },
          ].map((item) => (
            <a
              key={item.name}
              href="#"
              className={`flex items-center space-x-3 rounded-lg px-4 py-3 ${
                item.active
                  ? "bg-gray-800 text-white"
                  : "hover:bg-gray-800 hover:text-white"
              }`}
            >
              <item.icon className="h-6 w-6" />
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="max-w-lg flex-1">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full rounded-md border border-gray-300 bg-gray-50 py-2 pl-10 pr-4 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                <BellIcon className="h-6 w-6" />
              </button>
              <img
                src="https://v0.dev/placeholder.svg?height=32&width=32"
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>

          {/* Metrics */}
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Open Tickets */}
            <div className="rounded-lg bg-white p-6 shadow">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-500">
                  Open Tickets
                </h3>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-600">
                  +2
                </span>
              </div>
              <p className="mt-2 text-3xl font-bold text-gray-900">24</p>
            </div>

            {/* Closed Tickets */}
            <div className="rounded-lg bg-white p-6 shadow">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-500">
                  Closed Tickets
                </h3>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-600">
                  +5
                </span>
              </div>
              <p className="mt-2 text-3xl font-bold text-gray-900">189</p>
            </div>

            {/* Average Response Time */}
            <div className="rounded-lg bg-white p-6 shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Average</h3>
                  <p className="text-xs text-gray-500">Response Time</p>
                </div>
                <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-600">
                  -18m
                </span>
              </div>
              <p className="mt-2 text-3xl font-bold text-gray-900">2h 13m</p>
            </div>
          </div>

          {/* Current Problems */}
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900">
              Current Problems
            </h3>
            <div className="mt-4 rounded-lg bg-white shadow">
              {[
                { name: "Server Downtime", severity: "high", status: "open" },
                {
                  name: "Network Latency",
                  severity: "medium",
                  status: "investigating",
                },
                {
                  name: "Database Connectivity",
                  severity: "low",
                  status: "resolved",
                },
                {
                  name: "API Rate Limiting",
                  severity: "medium",
                  status: "open",
                },
              ].map((problem, i) => (
                <div
                  key={problem.name}
                  className={`flex items-center justify-between p-4 ${
                    i !== 3 ? "border-b border-gray-200" : ""
                  }`}
                >
                  <span className="text-sm font-medium text-gray-900">
                    {problem.name}
                  </span>
                  <div className="flex space-x-2">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        problem.severity === "high"
                          ? "bg-red-100 text-red-800"
                          : problem.severity === "medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                      }`}
                    >
                      {problem.severity}
                    </span>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        problem.status === "open"
                          ? "bg-blue-100 text-blue-800"
                          : problem.status === "investigating"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-green-100 text-green-800"
                      }`}
                    >
                      {problem.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
