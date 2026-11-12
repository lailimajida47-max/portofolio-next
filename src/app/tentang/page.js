export const metadata = {
  title: "Tentang",
  description: "Tentang diri, hobi, cita-cita, dan jadwal kegiatan Laili Majida.",
};

const hobi = [
  "Memasak",
  "Baking",
  "Menonton drakor",
  "Mendengarkan musik",
  "Membaca AU",
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

export default function Tentang() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl bg-background px-4 py-10 text-foreground">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-primary md:text-4xl">
          Tentang Saya
        </h1>
        <p className="mt-3 text-muted-foreground">
          Kenali lebih dekat tentang diri, hobi, cita-cita, dan kegiatan saya.
        </p>
      </div>

      {/* Tentang Aku */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="mb-3 text-2xl font-bold text-primary">
          Tentang Aku
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Halo! Saya Laili Majida, siswi kelas XI RPL 1 di jurusan
          Rekayasa Perangkat Lunak (RPL). Saya tertarik dengan dunia
          teknologi dan pengembangan website. Saya juga senang memasak
          dan membuat kue. Saya ingin terus belajar mengembangkan
          kemampuan dan membuat karya digital yang bermanfaat.
        </p>
      </section>

      {/* Hobi dan Cita-cita */}
      <section className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-primary">
            Hobi
          </h2>
          <ul className="list-disc pl-5 text-sm leading-relaxed text-muted-foreground">
            {hobi.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-primary">
            Cita-cita
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Menjadi pengusaha bakery.
          </p>
          <ol className="mt-2 list-decimal pl-5 text-sm leading-relaxed text-muted-foreground">
            <li>Menyelesaikan pendidikan di SMK.</li>
            <li>Melanjutkan pendidikan untuk usaha bisnis.</li>
            <li>Belajar berwirausaha dan membangun usaha sendiri.</li>
          </ol>
        </div>
      </section>

      {/* Jadwal Kegiatan */}
      <section className="mt-10 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-primary">
          Jadwal Kegiatan
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm text-muted-foreground">
            <thead>
              <tr className="bg-muted text-foreground">
                <th className="px-4 py-3">Hari</th>
                <th className="px-4 py-3">Waktu</th>
                <th className="px-4 py-3">Kegiatan</th>
              </tr>
            </thead>
            <tbody>
              {jadwal.map((item) => (
                <tr
                  key={item.hari}
                  className="border-b border-border"
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
