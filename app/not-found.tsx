import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-24 text-center">
      <h1 className="mb-2 font-display text-3xl font-semibold text-sea-900">404</h1>
      <p className="mb-6 text-sea-900/70">
        Diese Seite gibt es nicht – aber die Adria wartet trotzdem auf dich.
      </p>
      <Link
        href="/"
        className="rounded-full bg-terracotta-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-terracotta-600"
      >
        Zur Startseite
      </Link>
    </div>
  );
}
