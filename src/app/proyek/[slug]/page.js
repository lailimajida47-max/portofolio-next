import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/lib/supabase";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const { data: item } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!item) {
    return {
      title: "Proyek tidak ditemukan",
    };
  }

  return {
    title: item.judul,
    description: item.deskripsi,
  };
}

export default async function DetailProyek({ params }) {
  const { slug } = await params;

  const { data: item, error } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !item) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link
        href="/proyek"
        className="text-sm font-semibold text-aksen hover:underline"
      >
        &larr; Kembali ke daftar proyek
      </Link>

      <h1 className="mt-4 text-3xl font-bold text-primary md:text-4xl">
        {item.judul}
      </h1>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Badge variant="outline">{item.kategori}</Badge>
        <span className="text-sm text-muted-foreground">
          Dibuat di {item.minggu}
        </span>
      </div>

      <Separator className="my-5" />

      {item.gambar_url?.trim() && (
        <Image
          src={item.gambar_url.trim()}
          alt={`Tangkapan layar ${item.judul}`}
          width={640}
          height={420}
          loading="eager"
          className="h-auto w-full rounded-xl border border-border"
        />
      )}

      <p className="mt-6 text-lg text-foreground">
        {item.deskripsi}
      </p>

      <h2 className="mt-8 text-2xl font-bold text-primary">
        Yang Saya Pelajari
      </h2>

      <ul className="mt-3 list-disc pl-5 text-foreground">
        {item.fitur?.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </main>
  );
}
