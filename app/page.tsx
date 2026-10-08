import Header from "@/components/Header";
import JourneySearch from "@/components/JourneySearch";
import TransportOptions from "@/components/TransportOptions";
import PopularRoutes from "@/components/PopularRoutes";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="bg-gradient-to-b from-green-50 to-white px-5 pb-16 pt-16">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              🚍 Your Haryana Travel Companion
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
              Travel across Haryana,
              <span className="block text-green-600">
                made simple.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              Find bus routes, train information and the best way to travel
              between cities across Haryana.
            </p>

            <JourneySearch />
          </div>
        </section>

        <TransportOptions />

        <PopularRoutes />
      </main>

      <Footer />
    </div>
  );
}