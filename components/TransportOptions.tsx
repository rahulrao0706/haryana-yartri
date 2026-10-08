const options = [
  {
    icon: "🚌",
    title: "Bus",
    description: "Haryana Roadways & private buses",
    href: "/bus",
  },
  {
    icon: "🚆",
    title: "Train",
    description: "Train routes & station information",
    href: "/train",
  },
  {
    icon: "🗺️",
    title: "Journey Planner",
    description: "Find the best route between places",
    href: "/journey",
  },
];

export default function TransportOptions() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="mb-7">
        <h2 className="text-2xl font-bold text-slate-900">
          Explore Transport
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Find buses, trains and routes across Haryana
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {options.map((option) => (
          <a
            key={option.title}
            href={option.href}
            className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-green-300 hover:shadow-lg"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl">
              {option.icon}
            </div>

            <h3 className="font-semibold text-slate-900 group-hover:text-green-600">
              {option.title}
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              {option.description}
            </p>

            <div className="mt-5 text-sm font-semibold text-green-600">
              Explore →
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}