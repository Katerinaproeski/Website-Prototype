import Link from "next/link";
import type { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 px-6 py-4 bg-white shadow-sm">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <nav className="mt-3 space-x-4 text-sm">
          <Link className="text-blue-600 hover:text-blue-800" href="/admin">Dashboard</Link>
          <Link className="text-blue-600 hover:text-blue-800" href="/admin/users">Users</Link>
          <Link className="text-blue-600 hover:text-blue-800" href="/user">User Panel</Link>
        </nav>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
