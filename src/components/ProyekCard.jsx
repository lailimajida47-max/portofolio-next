
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function ProyekCard({ proyek }) {
  const gambar = proyek.gambar_url?.trim();

  return (
    <Link href={`/proyek/${proyek.slug}`}>
      <Card className="h-full overflow-hidden">
        {gambar ? (
          <Image
            src={gambar}
            alt={`Tangkapan layar ${proyek.judul}`}
            width={640}
            height={360}
            className="h-48 w-full object-cover"
          />
        ) : (
          <div className="flex h-48 items-center justify-center bg-muted text-muted-foreground">
            Gambar belum tersedia
          </div>
        )}

        <div className="p-5">
          <h2 className="text-xl font-bold text-primary">
            {proyek.judul}
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            {proyek.deskripsi}
          </p>
        </div>
      </Card>
    </Link>
  );
}
