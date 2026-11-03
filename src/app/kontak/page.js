import FormKontak from "@/components/FormKontak";

export const metadata = {
  title: "Kontak",
  description: "Hubungi Laili Majida untuk pertanyaan dan kerja sama.",
};

export default function Kontak() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      {/* Judul */}
      <h1 className="text-3xl font-bold text-[#263d5b] md:text-4xl">
        Hubungi Saya
      </h1>

      <p className="mt-2 text-sm text-gray-600">
        Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
      </p>

      {/* Layout Kontak */}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {/* Form Kontak */}
        <section className="rounded-xl border border-gray-200 bg-white dark:bg-gray-800 p-6 shadow-sm md:col-span-2">
          <FormKontak />
        </section>

        {/* Temukan Saya */}
        <aside className="rounded-xl border border-gray-200 bg-white dark:bg-gray-800 p-5 shadow-sm md:p-4">
          <h2 className="text-xl font-bold text-[#263d5b]">
            Temukan Saya di
          </h2>

          <div className="mt-3 flex flex-col gap-2 text-sm">
            <a
              href="https://github.com/lailimajida47-max"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b94c5b] hover:underline"
            >
              GitHub
            </a>

            <a
              href="https://github.com/lailimajida47-max"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b94c5b] hover:underline"
            >
              lailimajida47-max
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}