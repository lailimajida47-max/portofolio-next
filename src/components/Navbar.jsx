"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import TombolTema from "./Tomboltema";

const menu = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang" },
  { href: "/proyek", label: "Proyek" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-[#1D3557] text-white">
      <nav className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="text-xl font-bold">
          Laili Majida
        </Link>

        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {menu.map((item) => {
            const kelas =
              pathname === item.href
                ? "font-bold text-white underline underline-offset-8"
                : "text-gray-200 hover:text-white";

            return (
              <li key={item.href}>
                <Link href={item.href} className={kelas}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <TombolTema />
      </nav>
    </header>
  );
}
