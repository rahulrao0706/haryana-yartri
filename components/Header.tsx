import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-xl">
            🚌
          </div>

          <div>
            <h1 className="text-lg font-bold text-slate-900">
              Haryana Yatri
            </h1>
            <p className="text-xs text-slate-500">
              Travel Smarter Across Haryana
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <Link
            href="/bus"
            className="text-sm font-medium text-slate-600 hover:text-green-600"
          >
            Bus
          </Link>

          <Link
            href="/train"
            className="text-sm font-medium text-slate-600 hover:text-green-600"
          >
            Train
          </Link>

          <Link
            href="/bus-stands"
            className="text-sm font-medium text-slate-600 hover:text-green-600"
          >
            Bus Stands
          </Link>

          <Link
            href="/places"
            className="text-sm font-medium text-slate-600 hover:text-green-600"
          >
            Places
          </Link>

          <Link
            href="/journey"
            className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
          >
            Plan Journey
          </Link>
        </nav>

        <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm md:hidden">
          ☰
        </button>
      </div>
    </header>
  );
}