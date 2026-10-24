import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Andi Pratama | Portofolio",
  description: "Potofolio Andi Pratama, siswa SMK calon junior Web Developer di Kelas Industri UBIG.",
};

// di dalam return, pada tag <html> lang="id"

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-later text-gray-800">{children}</body>
    </html>
  );
}
