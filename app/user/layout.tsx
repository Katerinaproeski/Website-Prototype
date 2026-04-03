import Link from "next/link";
import type { ReactNode } from "react";

export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 px-6 py-4 bg-cyan-50">
        <h1 className="text-2xl font-bold">User Panel</h1>
        <nav className="mt-3 space-x-4 text-sm">
          <Link className="text-blue-600 hover:text-blue-800" href="/user">Dashboard</Link>
          <Link className="text-blue-600 hover:text-blue-800" href="/user/profile">Profile</Link>
          <Link className="text-blue-600 hover:text-blue-800" href="/admin">Admin Panel</Link>
        </nav>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
