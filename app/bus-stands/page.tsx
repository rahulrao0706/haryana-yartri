import BusStandSearch from "@/components/BusStandSearch";

export default function BusStandsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-green-700 px-4 py-14 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-green-200">
            Haryana Yatri
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Haryana Bus Stands
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-green-100">
            Find bus stands, enquiry numbers, facilities and popular
            routes across Haryana.
          </p>
        </div>
      </section>

      <BusStandSearch />
    </main>
  );
}