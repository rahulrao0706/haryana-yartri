import TrainSearch from "@/components/TrainSearch";

export default function TrainPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-green-700 px-4 py-14 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-wide text-green-200">
            Haryana Yatri
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Train Search
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-green-100">
            Find trains connecting Haryana with Delhi, Rajasthan,
            Punjab and other parts of India.
          </p>
        </div>
      </section>

      <TrainSearch />

      <section className="mx-auto max-w-7xl px-4 pb-10">
        <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-800">
          <strong>Development data:</strong> Train information shown
          here is currently sample data. Verified railway data will be
          connected before production launch.
        </div>
      </section>
    </main>
  );
}