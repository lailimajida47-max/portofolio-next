import Image from "next/image";

export default function Kontak() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-utama md:text-4xl">
        Hubungi Saya
      </h1>

      <div className="mt-6 flex flex-col items-center gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:flex-row">
        <Image
          src="/proyek-profil.png"
          alt="Profil Laili Majida"
          width={160}
          height={160}
          className="h-40 w-40 rounded-full border border-gray-200 object-cover"
        />

        <div>
          <h2 className="text-xl font-bold text-utama">
            Laili Majida
          </h2>

          <p className="mt-2 text-gray-700">
            Halo! Saya Laili Majida, siswi XI RPL 1 yang tertarik dengan
            pengembangan web.
          </p>

          <p className="mt-3 text-gray-700">
            Punya pertanyaan atau ingin bekerja sama? Silakan hubungi saya.
          </p>
        </div>
      </div>
    </main>
  );
}