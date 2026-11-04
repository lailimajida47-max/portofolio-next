import Link from "next/link";
import Hero from "@/components/Hero";
import ProyekCard from "@/components/ProyekCard";
import SkillCard from "@/components/SkillCard";
import { proyek } from "@/data/proyek";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

const proyekTerbaru = proyek.slice(-3).reverse();

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl bg-latar px-4 py-10 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <Hero
        nama="Laili Majida"
        tagline="Siswa Kelas XI SMK Jurusan RPL, calon Junior Web Developer di Kelas Industri UBIG."
      />

      {/* Keahlian */}
      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-utama dark:text-sky-200">
          Keahlian
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard
              key={skill.nama}
              nama={skill.nama}
              level={skill.level}
            />
          ))}
        </div>
      </section>

      {/* Proyek Terbaru */}
      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-utama dark:text-sky-200">
          Proyek Terbaru
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {proyekTerbaru.map((item) => (
            <ProyekCard key={item.slug} proyek={item} />
          ))}
        </div>

        <Link
          href="/proyek"
          className="mt-6 inline-block rounded-lg bg-utama px-5 py-2 font-semibold text-white hover:opacity-90"
        >
          Lihat semua proyek
        </Link>
      </section>
    </main>
  );
}