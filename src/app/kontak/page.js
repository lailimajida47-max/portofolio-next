import Image from "next/image";

export const metadata = {
  title: "Kontak",
  description: "Hubungi Laili Majida untuk pertanyaan dan kerja sama.",
};

export default function Kontak() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-utama md:text-4xl">
        Hubungi Saya
      </h1>

      <p className="mt-3 text-lg text-gray-700">
        Punya pertanyaan atau ingin bekerja sama? Silakan isi formulir berikut.
      </p>

      {/* Form Kontak */}
      <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-2xl font-bold text-utama">
          Kirim Pesan
        </h2>

        <form
          action="mailto:"
          method="post"
          encType="text/plain"
          className="space-y-4"
        >
          <div>
            <label htmlFor="nama" className="block font-semibold">
              Nama lengkap
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              placeholder="Contoh: Na Jaemin"
              required
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="nama@email.com"
              required
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900"
            />
          </div>

          <div>
            <label htmlFor="subjek" className="block font-semibold">
              Nomor HP
            </label>
            <input
              type="text"
              id="subjek"
              name="subjek"
              placeholder="0859013456812"
              required
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900"
            />
          </div>

          <div>
            <label htmlFor="pesan" className="block font-semibold">
              Pesan
            </label>
            <textarea
              id="pesan"
              name="pesan"
              rows={5}
              placeholder="Tulis pesan kamu di sini..."
              required
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-utama px-5 py-3 font-semibold text-white hover:opacity-90"
          >
            Kirim Pesan
          </button>
        </form>
      </section>
    </main>
  );
}