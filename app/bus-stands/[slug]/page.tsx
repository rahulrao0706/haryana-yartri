import Link from "next/link";
import { notFound } from "next/navigation";
import { busStands } from "@/data/busStands";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BusStandDetailsPage({ params }: PageProps) {
  const { slug } = await params;

  const stand = busStands.find((item) => item.slug === slug);

  if (!stand) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-green-700 px-4 py-12 text-white">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/bus-stands"
            className="text-sm text-green-100 hover:text-white"
          >
            ← Back to Bus Stands
          </Link>

          <div className="mt-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium text-green-200">
                {stand.district}
              </p>

              <h1 className="mt-2 text-4xl font-bold">{stand.name}</h1>

              <p className="mt-3 text-green-100">{stand.address}</p>
            </div>

            {stand.verified && (
              <span className="w-fit rounded-full bg-white/15 px-4 py-2 text-sm font-medium">
                ✓ Verified Information
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Contact */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Enquiry</p>

            <h2 className="mt-2 text-xl font-bold text-gray-900">Contact</h2>

            {stand.phone ? (
              <a
                href={`tel:${stand.phone}`}
                className="mt-4 block font-semibold text-green-700"
              >
                ☎ {stand.phone}
              </a>
            ) : (
              <p className="mt-4 text-gray-500">Information not available</p>
            )}
          </div>

          {/* Location */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Location</p>

            <h2 className="mt-2 text-xl font-bold text-gray-900">
              {stand.city}
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              {stand.district}, Haryana
            </p>
          </div>

          {/* Routes */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Routes</p>

            <h2 className="mt-2 text-xl font-bold text-gray-900">
              Popular Routes
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              {stand.popularRoutes.length} routes listed
            </p>
          </div>
        </div>

        {/* Facilities */}
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Facilities</h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {stand.facilities.map((facility) => (
              <div
                key={facility}
                className="rounded-xl bg-gray-50 p-4 text-sm font-medium text-gray-700"
              >
                ✓ {facility}
              </div>
            ))}
          </div>
        </div>

        {/* Popular Routes */}
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Popular Routes</h2>
          <Link
            href={`/bus?from=${encodeURIComponent(stand.city)}`}
            className="mt-6 block rounded-xl bg-green-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-green-700"
          >
            Search Buses From {stand.city}
          </Link>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {stand.popularRoutes.map((route) => (
              <div
                key={route}
                className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-sm font-medium text-gray-700"
              >
                🚌 {route}
              </div>
            ))}
          </div>
        </div>

        {/* Future map */}
        {stand.latitude && stand.longitude ? (
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">Location</h2>

            <p className="mt-2 text-sm text-gray-500">{stand.address}</p>

            <div className="mt-5 overflow-hidden rounded-xl border border-gray-200">
              <iframe
                title={`${stand.name} location`}
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                  stand.longitude - 0.01
                }%2C${stand.latitude - 0.01}%2C${
                  stand.longitude + 0.01
                }%2C${stand.latitude + 0.01}&layer=mapnik&marker=${
                  stand.latitude
                }%2C${stand.longitude}`}
                className="h-[350px] w-full border-0"
                loading="lazy"
              />
            </div>

            <a
              href={`https://www.openstreetmap.org/?mlat=${stand.latitude}&mlon=${stand.longitude}#map=16/${stand.latitude}/${stand.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-green-700 hover:underline"
            >
              Open in Maps →
            </a>
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center">
            <div className="text-4xl">📍</div>

            <h2 className="mt-3 text-xl font-bold text-gray-900">
              Bus Stand Location
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Location will be added after verification.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
