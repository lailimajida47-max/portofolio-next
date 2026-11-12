import FormKontak from "@/components/FormKontak";
import Kartu from "@/components/Kartu";

export const metadata = {
  title: "Kontak",
  description: "Hubungi Laili Majida untuk pertanyaan dan kerja sama.",
};

export default function Kontak() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl bg-background px-4 py-10 text-foreground">
      <h1 className="text-3xl font-bold text-primary md:text-4xl">
        Hubungi Saya
      </h1>

      <p className="mt-2 text-sm text-muted-foreground">
        Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Kartu judul="Form Kontak">
            <FormKontak />
          </Kartu>
        </div>

        <Kartu judul="Temukan Saya di">
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://github.com/lailimajida47-max"
                target="_blank"
                rel="noopener noreferrer"
                className="text-aksen hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://github.com/lailimajida47-max"
                target="_blank"
                rel="noopener noreferrer"
                className="text-aksen hover:underline"
              >
                lailimajida47-max
              </a>
            </li>
          </ul>
        </Kartu>
      </div>
    </main>
  );
}
