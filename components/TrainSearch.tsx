"use client";

import { useState } from "react";
import { trains } from "@/data/trains";

export default function TrainSearch() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const [results, setResults] = useState<typeof trains>([]);

  const locations = [
    "Delhi",
    "Gurugram",
    "Rewari",
    "Narnaul",
    "Rohtak",
    "Hisar",
    "Bhiwani",
    "Panipat",
    "Sonipat",
    "Ambala",
    "Kurukshetra",
    "Karnal",
  ];

  const handleSearch = () => {
    const filtered = trains.filter((train) => {
      const fromMatch =
        !from ||
        train.from.toLowerCase().includes(from.toLowerCase());

      const toMatch =
        !to ||
        train.to.toLowerCase().includes(to.toLowerCase());

      return fromMatch && toMatch;
    });

    setResults(filtered);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      {/* Search Box */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="grid gap-4 md:grid-cols-4">
          {/* From */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              From Station
            </label>

            <input
              list="train-locations"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="Enter departure station"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          {/* To */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              To Station
            </label>

            <input
              list="train-locations"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Enter destination station"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          {/* Date */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Journey Date
            </label>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          {/* Button */}
          <div className="flex items-end">
            <button
              onClick={handleSearch}
              className="w-full rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Search Trains
            </button>
          </div>
        </div>

        <datalist id="train-locations">
          {locations.map((location) => (
            <option key={location} value={location} />
          ))}
        </datalist>
      </div>

      {/* Results */}
      <div className="mt-10">
        {results.length > 0 ? (
          <>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                Available Trains
              </h2>

              <span className="text-sm text-gray-500">
                {results.length} trains found
              </span>
            </div>

            <div className="space-y-4">
              {results.map((train) => (
                <div
                  key={train.id}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    {/* Train Info */}
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-bold text-gray-900">
                          {train.name}
                        </h3>

                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                          {train.type}
                        </span>
                      </div>

                      <p className="mt-1 text-sm text-gray-500">
                        Train No. {train.number}
                      </p>
                    </div>

                    {/* Timing */}
                    <div className="flex items-center gap-5">
                      <div>
                        <p className="text-xl font-bold text-gray-900">
                          {train.departure}
                        </p>

                        <p className="text-sm text-gray-500">
                          {train.from}
                        </p>
                      </div>

                      <div className="text-center">
                        <p className="text-xs text-gray-400">
                          {train.duration}
                        </p>

                        <div className="mt-1 h-px w-16 bg-gray-300" />
                      </div>

                      <div>
                        <p className="text-xl font-bold text-gray-900">
                          {train.arrival}
                        </p>

                        <p className="text-sm text-gray-500">
                          {train.to}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Days */}
                  <div className="mt-5 border-t border-gray-100 pt-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                      Running Days
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {train.runningDays.map((day) => (
                        <span
                          key={day}
                          className="rounded-lg bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                        >
                          {day}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center">
            <div className="text-4xl">🚆</div>

            <h2 className="mt-3 text-xl font-bold text-gray-900">
              Search for trains
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Enter your departure and destination stations to find
              available trains.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}