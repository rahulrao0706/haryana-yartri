"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

const buses = [
  {
    id: 1,
    operator: "Haryana Roadways",
    type: "Ordinary",
    from: "Narnaul",
    to: "Gurugram",
    departure: "06:30 AM",
    arrival: "09:15 AM",
    duration: "2h 45m",
    fare: "₹---",
    stops: 8,
  },
  {
    id: 2,
    operator: "Haryana Roadways",
    type: "Express",
    from: "Narnaul",
    to: "Gurugram",
    departure: "08:15 AM",
    arrival: "10:45 AM",
    duration: "2h 30m",
    fare: "₹---",
    stops: 5,
  },
  {
    id: 3,
    operator: "Haryana Roadways",
    type: "Ordinary",
    from: "Narnaul",
    to: "Rewari",
    departure: "10:00 AM",
    arrival: "11:45 AM",
    duration: "1h 45m",
    fare: "₹---",
    stops: 6,
  },
];
const locations = [
  "Narnaul",
  "Rewari",
  "Gurugram",
  "Rohtak",
  "Hisar",
  "Karnal",
  "Panipat",
  "Sonipat",
  "Ambala",
  "Kurukshetra",
  "Jind",
  "Sirsa",
  "Faridabad",
  "Palwal",
];

export default function BusSearch() {
  const searchParams = useSearchParams();

  const initialFrom = searchParams.get("from") || "";
  const [from, setFrom] = useState(initialFrom);
  const [to, setTo] = useState("Gurugram");
  const [date, setDate] = useState("");

  const swapLocations = () => {
    setFrom(to);
    setTo(from);
  };

  const handleSearch = () => {
    console.log({
      from,
      to,
      date,
    });
  };

  return (
    <section className="mx-auto max-w-7xl px-5 py-10">
      {/* Search Box */}
      <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 md:p-6">
        <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_180px_auto] md:items-end">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-600">
              From
            </label>

            <input
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="Starting point"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <button
            onClick={swapLocations}
            // className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-gray-900 bg-slate-50 text-lg hover:bg-slate-100"
            aria-label="Swap locations"
          >
            ⇄
          </button>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-600">
              To
            </label>
            {/* <input
              list="haryana-locations"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="From"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
            /> */}

            <input
              list="haryana-locations"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="To"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-600">
              Travel Date
            </label>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-green-500"
            />
          </div>

          <button
            onClick={handleSearch}
            className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Search
          </button>
        </div>
      </div>

      {/* Results Header */}
      <div className="mt-10 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Available Buses</h2>

          <p className="mt-1 text-sm text-slate-500">
            {from} → {to}
          </p>
        </div>

        <div className="text-sm text-slate-500">
          {buses.length} routes found
        </div>
      </div>

      {/* Bus Cards */}
      <div className="mt-5 space-y-4">
        {buses.map((bus) => (
          <div
            key={bus.id}
            className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md md:p-6"
          >
            <div className="grid gap-6 md:grid-cols-[1fr_1.2fr_auto] md:items-center">
              {/* Operator */}
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-xl">
                    🚌
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {bus.operator}
                    </h3>

                    <p className="text-sm text-slate-500">{bus.type} Bus</p>
                  </div>
                </div>
              </div>

              {/* Time */}
              <div>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-lg font-bold text-slate-900">
                      {bus.departure}
                    </p>

                    <p className="text-xs text-slate-500">{bus.from}</p>
                  </div>

                  <div className="flex flex-1 items-center gap-2">
                    <div className="h-px flex-1 bg-slate-200" />

                    <span className="whitespace-nowrap text-xs text-slate-400">
                      {bus.duration}
                    </span>

                    <div className="h-px flex-1 bg-slate-200" />
                  </div>

                  <div>
                    <p className="text-lg font-bold text-slate-900">
                      {bus.arrival}
                    </p>

                    <p className="text-xs text-slate-500">{bus.to}</p>
                  </div>
                </div>

                <div className="mt-3 flex gap-4 text-xs text-slate-400">
                  <span>{bus.stops} stops</span>
                  <span>Fare: {bus.fare}</span>
                </div>
              </div>

              {/* Action */}
              <button className="rounded-xl border border-green-600 px-5 py-3 text-sm font-semibold text-green-600 transition hover:bg-green-600 hover:text-white">
                View Route
              </button>
            </div>
          </div>
        ))}
      </div>
      <datalist id="haryana-locations">
        {locations.map((location) => (
          <option key={location} value={location} />
        ))}
      </datalist>

      {/* Data Notice */}
      <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
        <strong>Demo data:</strong> These bus timings and fares are currently
        placeholders. Verified transport data will be connected in a later
        phase.
      </div>
    </section>
  );
}
