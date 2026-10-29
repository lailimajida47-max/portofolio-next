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

const jadwal = [
  {
    hari: "Senin",
    waktu: "19.00 - 20.30",
    kegiatan: "Mempelajari materi UBIG",
  },
  {
    hari: "Selasa",
    waktu: "19.00 - 20.15",
    kegiatan: "Mengerjakan tugas UBIG",
  },
  {
    hari: "Rabu",
    waktu: "18.00 - 21.10",
    kegiatan: "Membuat Website",
  },
  {
    hari: "Kamis",
    waktu: "20.00 - 22.00",
    kegiatan: "Merangkum catatan UBIG",
  },
  {
    hari: "Jumat",
    waktu: "19.00 - 20.30",
    kegiatan: "Mengevaluasi tugas UBIG",
  },
];

const proyekTerbaru = proyek.slice(-3).reverse();

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero
        nama="Laili Majida"
        tagline="Siswa Kelas XI SMK Jurusan RPL, calon Junior Web Developer di Kelas Industri UBIG."
      />

      <section className="mt-10 rounded-xl bg-white p-6 shadow-sm">
        <h2 className="mb-3 text-2xl font-bold text-utama">
          Tentang Saya
        </h2>
        <p className="text-sm leading-relaxed text-slate-600">
          Halo! Saya Laili Majida, siswi kelas XI RPL 1 di jurusan
          Rekayasa Perangkat Lunak (RPL). Saya tertarik dengan dunia
          teknologi dan pengembangan website. Saya juga senang memasak
          dan membuat kue. Saya ingin terus belajar mengembangkan
          kemampuan dan membuat karya digital yang bermanfaat.
        </p>
      </section>

      <section className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-utama">Hobi</h2>
          <ul className="list-disc pl-5 text-sm leading-relaxed text-slate-600">
            <li>Memasak</li>
            <li>Baking</li>
            <li>Menonton drakor</li>
            <li>Mendengarkan musik</li>
            <li>Membaca AU</li>
          </ul>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-utama">
            Cita-cita
          </h2>
          <p className="text-sm leading-relaxed text-slate-600">
            Menjadi pengusaha bakery.
          </p>
          <ol className="mt-2 list-decimal pl-5 text-sm leading-relaxed text-slate-600">
            <li>Menyelesaikan pendidikan di SMK.</li>
            <li>Melanjutkan pendidikan untuk usaha bisnis.</li>
            <li>Belajar berwirausaha dan membangun usaha sendiri.</li>
          </ol>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-utama">
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

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-utama">
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

      <section className="mt-10 rounded-xl bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-utama">
          Jadwal Kegiatan
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm text-slate-600">
            <thead>
              <tr className="bg-sky-950 text-white">
                <th className="px-4 py-3">Hari</th>
                <th className="px-4 py-3">Waktu</th>
                <th className="px-4 py-3">Kegiatan</th>
              </tr>
            </thead>
            <tbody>
              {jadwal.map((item, index) => (
                <tr
                  key={`${item.hari}-${index}`}
                  className="border-b border-gray-200"
                >
                  <td className="px-4 py-3">{item.hari}</td>
                  <td className="px-4 py-3">{item.waktu}</td>
                  <td className="px-4 py-3">{item.kegiatan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}