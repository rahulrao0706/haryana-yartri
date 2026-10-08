export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-900">Haryana Yatri</p>
          <p className="text-sm text-slate-500">
            Travel Smarter Across Haryana
          </p>
        </div>

        <p className="text-sm text-slate-400">
          © 2026 Haryana Yatri. All rights reserved.
        </p>
      </div>
    </footer>
  );
}