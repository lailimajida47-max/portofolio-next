import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";

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
    hari: "selasa",
    waktu: "19.00 - 20.15",
    kegiatan: "Mengerjakan tugas UBIG",
  },
  {
    hari: "Rabu",
    waktu: "18.00 - 21.10",
    kegiatan: "Membuat Website ",
  },
  {
    hari: "Kamis",
    waktu: "20.00 - 22.00",
    kegiatan: "Merangkum Tugas catatan UBIG",
  },
  {
    hari: "jum'at",
    waktu: "19.00 - 20.30",
    kegiatan: "Mengevaluasi tugas UBIG",
  },
  
]
 
 
export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero
      nama="Laili Majida"
      tagline="Siswa Kelas XI SMK Jurusan RPL, calon Junior Web Developer di Kelas Industri UBIG."
      />
    
     {/* Tentang Saya */}
     <section className="mt-10 rounded-xl bg-white p-6 shadow-sm">
      <h2 className="mb-3 text-2xl font-bold text-utama">
        Tentang Saya 
      </h2>
      <p className="text-sm leading-relaxed text-slate-600">
        Halo! Saya Laili Majida Siswi Kelas XI RPL 1 di Jurusan REKAYASA PERANGKAT LUNAK (RPL). Saya tertarik dengan dunia teknologi dan pengembangan Website. Saya juga senang Memasak, Membuat kue. dan Saya ingin terus belajar memngembangkan kemampuan dan membuat karya di gital yang bermanfaat bagi orang di sekitar saya maupun bagi banyak orang.
      </p>
     </section>

     {/* Hobi dan Cita - Cita */}
     <section className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
      {/* Hobi */}
      <div className="rounded-xl bg-white p-5 shadow-sm">
        <h2 className="mb-3 text-xl font-bold text-utama">
          Hobi
        </h2>
        <ul className="list-disc pl-5 text-sm leading-relaxed text-slate-600">
          <li>Memasak</li>
          <li>Baking</li>
          <li>Menonton Drakor</li>
          <li>Mendengarkan Musik</li>
          <li>Membaca au</li>
        </ul>
      </div>

      {/* Cita-Cita */}
      <div className="rounded-xl bg-white p-5 shadow-sm">
        <h2 className="mb-3 text-xl font-bold text-utama">
          Cita - Cita
        </h2>
        <p className="text-sm leading-relaxed text-slate-600">
          Menjadi Pengusaha bakery 
        </p>
        <ol className="mt-2 list-decimal pl-5 text-sm leading-relaxed text-slate-600">
          <li>Menyelesaikan pendidikan di SMK 1</li>
          <li>Melanjutkan Pendidikan Untuk Usaha Bisnis</li>
          <li>Belajar berwirausaha dan membangun usaha sendiri</li>
        </ol>
      </div>
     </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-utama">Keahlian</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
          ))}
        </div>
      </section>

      {/* Jadwal kegiatan UBIG */}
      <section className="mt-6 rounded-xl bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-utama">
          Jadwal Kegiatan
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm text-slate-600">
            <thead>
              <tr
              className="bg-sky-950 text-white">
                <th className="px-4 py-3">Hari</th>
                    <th className="px-4 py-3">Waktu</th>
                     <th className="px-4 py-3">Kegiatan</th>
                     </tr>
                      </thead>
                    <tbody>
                     {jadwal.map((item, index) => (
                       <tr key={`${item.hari}-${index}`}>
                      <td className="px-4 py-3">{item.hari}</td>
                       <td className="px-4 py-3">{item.waktu}</td>
                       <td className="px-4 py-3">{item.kegiatan}</td>
                     </tr>
                           ))}
                     </tbody>
              
          </table>
        </div>
        {/* Footer dengan tahun otomatis */}
        <footer className="mt-10 bg-sky-950 px-4 py-5 text-center text-sm text-white">
          {new Date().getFullYear()} Laili Majida | Dibuat dengan Next.js
        | Kelas Industri UBIG
        </footer>
      </section>
    </main>
  );
}