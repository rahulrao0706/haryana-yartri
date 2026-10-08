const routes = [
  {
    from: "Narnaul",
    to: "Gurugram",
    type: "Bus",
  },
  {
    from: "Narnaul",
    to: "Rewari",
    type: "Bus",
  },
  {
    from: "Rewari",
    to: "Delhi",
    type: "Train",
  },
  {
    from: "Rohtak",
    to: "Delhi",
    type: "Bus",
  },
  {
    from: "Hisar",
    to: "Gurugram",
    type: "Bus",
  },
  {
    from: "Kurukshetra",
    to: "Delhi",
    type: "Train",
  },
];

export default function PopularRoutes() {
  return (
    <section className="bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-7">
          <h2 className="text-2xl font-bold text-slate-900">
            Popular Routes
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Quickly explore popular Haryana routes
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((route) => (
            <button
              key={`${route.from}-${route.to}`}
              className="rounded-xl border border-slate-200 bg-white p-5 text-left transition hover:border-green-300 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500">
                  {route.type}
                </span>

                <span className="text-green-600">→</span>
              </div>

              <div className="mt-4 flex items-center gap-2 font-semibold text-slate-900">
                <span>{route.from}</span>
                <span className="text-slate-400">→</span>
                <span>{route.to}</span>
              </div>

              <p className="mt-2 text-xs text-slate-400">
                View available routes
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}