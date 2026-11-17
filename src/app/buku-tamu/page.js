import FormBukuTamu from "@/components/FormBukuTamu";
import { supabase } from "@/lib/supabase";
import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Buku Tamu",
  description: "Tinggalkan kesan atau sapaan untuk Laili Majida.",
};

export default async function BukuTamu() {
  const { data: daftarPesan } = await supabase
    .from("buku_tamu")
    .select("*")
    .order("disematkan", { ascending: false })
    .order("created_at", { ascending: false });

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-primary md:text-4xl">
        Buku Tamu
      </h1>

      <p className="mt-3 text-lg text-muted-foreground">
        Tinggalkan kesan atau sapaan. Pesanmu langsung tampil di bawah.
      </p>

      <Card className="mt-8">
        <CardContent>
          <FormBukuTamu />
        </CardContent>
      </Card>

      <h2 className="mt-10 text-2xl font-bold text-primary">
        Pesan Terbaru
      </h2>

      <div className="mt-4 space-y-4">
        {daftarPesan &&
          daftarPesan.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>{item.nama}</CardTitle>
                {item.disematkan && <Badge>Disematkan</Badge>}
                <CardDescription>
                  {new Date(item.created_at).toLocaleDateString("id-ID")}
                </CardDescription>
              </CardHeader>

              <CardContent>{item.pesan}</CardContent>
            </Card>
          ))}
      </div>
    </main>
  );
}