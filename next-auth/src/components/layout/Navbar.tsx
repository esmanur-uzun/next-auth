"use client"
import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const LogoutButton = dynamic(() => import("@/components/buttons/Logut"), { ssr: false });

const menu = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Profil", href: "/profile" },
  { name: "Ayarlar", href: "/settings" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-900 via-indigo-700 to-fuchsia-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-extrabold tracking-tight text-white drop-shadow-lg select-none">
              <span className="bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">NextAuth</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-lg font-medium text-white transition-all duration-150 hover:bg-fuchsia-600/80 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
              >
                {item.name}
              </Link>
            ))}
            <div className="ml-4">
              <LogoutButton />
            </div>
          </div>
          <button
            className="md:hidden p-2 rounded bg-white/10 hover:bg-white/20 text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menüyü Aç/Kapat"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setOpen(false)} />
      )}
      <div
        className={`md:hidden fixed top-0 left-0 w-2/3 max-w-xs h-full bg-gradient-to-b from-indigo-900 via-indigo-700 to-fuchsia-600 shadow-2xl z-50 transform transition-transform duration-200 ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col p-6 space-y-4 h-full">
          <div className="text-2xl font-extrabold tracking-tight text-white mb-8 select-none">
            <span className="bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">NextAuth</span>
          </div>
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 rounded-lg font-medium text-white transition-all duration-150 hover:bg-fuchsia-600/80 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex-1" />
          <LogoutButton />
        </div>
      </div>
    </nav>
  );
}
