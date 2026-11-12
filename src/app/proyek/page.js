import FilterProyek from "@/components/FilterProyek";
import { supabase } from "@/lib/supabase";

export const metadata = {
  title: "Proyek",
  description: "Daftar proyek HTML, CSS, dan JavaScript karya Laili Majida.",
};

export default async function DaftarProyek() {
  const { data: proyek, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Gagal mengambil data proyek:", error.message);
  }

  const daftarProyek = proyek ?? [];

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-primary md:text-4xl">
        Proyek Saya
      </h1>

      <p className="mt-3 text-lg text-muted-foreground">
        Kumpulan hasil belajar saya di Kelas Industri UBIG. Klik kartu untuk
        melihat detailnya.
      </p>

      <FilterProyek proyek={daftarProyek} />
    </main>
  );
}
