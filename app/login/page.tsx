"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [role, setRole] = useState<"admin" | "user">("user");
  const router = useRouter();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    document.cookie = `role=${role}; path=/; max-age=${60 * 60 * 24}`;
    router.push(role === "admin" ? "/admin" : "/user");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-100">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow"
      >
        <h1 className="text-2xl font-bold">Login</h1>
        <p className="mt-2 text-sm text-slate-600">Pick a role and continue.</p>

        <div className="mt-4">
          <label className="block text-sm font-medium text-slate-700" htmlFor="role">
            Role
          </label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value as "admin" | "user")}
            className="mt-1 w-full border rounded px-3 py-2"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
