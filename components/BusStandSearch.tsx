"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { busStands } from "@/data/busStands";

export default function BusStandSearch() {
  const [search, setSearch] = useState("");
  const [district, setDistrict] = useState("All");

  const districts = Array.from(
    new Set(busStands.map((stand) => stand.district))
  );

  const filteredStands = useMemo(() => {
    return busStands.filter((stand) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        stand.name.toLowerCase().includes(searchText) ||
        stand.city.toLowerCase().includes(searchText) ||
        stand.district.toLowerCase().includes(searchText);

      const matchesDistrict =
        district === "All" || stand.district === district;

      return matchesSearch && matchesDistrict;
    });
  }, [search, district]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      {/* Search */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="grid gap-4 md:grid-cols-[1fr_240px]">
          <input
            type="text"
            placeholder="Search bus stand, city or district..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
          />

          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
          >
            <option value="All">All Districts</option>

            {districts.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="mt-8">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            Bus Stands
          </h2>

          <span className="text-sm text-gray-500">
            {filteredStands.length} found
          </span>
        </div>

        {filteredStands.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center">
            <h3 className="text-lg font-semibold text-gray-900">
              No bus stand found
            </h3>

            <p className="mt-2 text-gray-500">
              Try another city, district or bus stand name.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredStands.map((stand) => (
              <div
                key={stand.id}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {stand.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {stand.city}, {stand.district}
                    </p>
                  </div>

                  {stand.verified && (
                    <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
                      Verified
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-600">
                  {stand.address}
                </p>

                {stand.phone && (
                  <p className="mt-3 text-sm font-medium text-gray-700">
                    ☎ {stand.phone}
                  </p>
                )}

                <Link
                  href={`/bus-stands/${stand.slug}`}
                  className="mt-5 block rounded-xl bg-green-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-green-700"
                >
                  View Bus Stand
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}