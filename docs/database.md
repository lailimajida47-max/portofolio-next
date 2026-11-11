# Struktur Database Supabase

Database disimpan di Supabase, project `portofolio-laili` (region Southeast Asia, Singapore).

## Tabel `projects`

Daftar proyek portofolio.

| Kolom | Tipe | Keterangan |
|---|---|---|
| `id` | `int8` | Primary key, nomor otomatis |
| `created_at` | `timestamptz` | Waktu baris dibuat |
| `slug` | `text` | Penanda unik di alamat |
| `judul` | `text` | Judul proyek |
| `deskripsi` | `text` | Deskripsi proyek |
| `kategori` | `text` | Kategori proyek |
| `minggu` | `text` | Minggu proyek dibuat |
| `fitur` | `text[]` | Daftar fitur |
| `gambar_url` | `text` | Alamat gambar |

RLS aktif. Policy `Pengunjung boleh membaca proyek`: peran `anon` boleh `select` semua baris.

## Tabel `messages`

Pesan dari form kontak.

| Kolom | Tipe | Keterangan |
|---|---|---|
| `id` | `int8` | Primary key, nomor otomatis |
| `created_at` | `timestamptz` | Waktu baris dibuat |
| `nama` | `text` | Nama pengirim |
| `email` | `text` | Email pengirim |
| `pesan` | `text` | Isi pesan |

RLS aktif tanpa policy, sehingga pengunjung tidak bisa membaca pesan.
## Tabel `skills`

Daftar keterampilan portofolio.

| Kolom | Tipe | Keterangan |
|---|---|---|
| `id` | `int8` | Primary key, nomor otomatis |
| `created_at` | `timestamptz` | Waktu baris dibuat |
| `nama` | `text` | Nama keterampilan |
| `level` | `text` | Tingkat penguasaan |

