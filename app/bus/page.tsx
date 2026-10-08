import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BusSearch from "@/components/BusSearch";

export default function BusPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main>
        <section className="bg-green-700 px-5 py-12 text-white">
          <div className="mx-auto max-w-7xl">
            <p className="mb-2 text-sm font-medium text-green-100">
              Haryana Yatri / Bus
            </p>

            <h1 className="text-3xl font-bold md:text-4xl">
              Find Bus Routes
            </h1>

            <p className="mt-3 max-w-2xl text-green-100">
              Search Haryana bus routes, timings and travel information.
            </p>
          </div>
        </section>

        <BusSearch />
      </main>

      <Footer />
    </div>
  );
}