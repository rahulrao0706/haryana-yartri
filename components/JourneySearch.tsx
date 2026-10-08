"use client";

import { useState } from "react";

export default function JourneySearch() {
  const [from, setFrom] = useState("Narnaul");
  const [to, setTo] = useState("Gurugram");

  const swapLocations = () => {
    setFrom(to);
    setTo(from);
  };

  const handleSearch = () => {
    alert(`Searching journey from ${from} to ${to}`);
  };

  return (
    <div className="mx-auto mt-8 max-w-4xl rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-200 md:p-6">
      <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto] md:items-end">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-600">
            From
          </label>

          <div className="flex items-center rounded-xl border text-gray-900 border-slate-200 px-4 py-3">
            <span className="mr-3">📍</span>

            <input
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="Enter starting point"
              className="w-full bg-transparent text-sm font-medium outline-none"
            />
          </div>
        </div>

        <button
          onClick={swapLocations}
          className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border text-gray-900 border-slate-200 bg-slate-50 hover:bg-slate-100"
          aria-label="Swap locations"
        >
          ⇄
        </button>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-600">
            To
          </label>

          <div className="flex items-center rounded-xl border text-gray-900 border-slate-200 px-4 py-3">
            <span className="mr-3">📍</span>

            <input
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Enter destination"
              className="w-full bg-transparent text-sm font-medium outline-none"
            />
          </div>
        </div>

        <button
          onClick={handleSearch}
          className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          Search
        </button>
      </div>
    </div>
  );
}