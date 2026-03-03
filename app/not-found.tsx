import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-slate-600">Page not found.</p>
      <Link href="/en" className="mt-4 rounded-full bg-brand-700 px-5 py-2 text-white">
        Go home
      </Link>
    </main>
  );
}
