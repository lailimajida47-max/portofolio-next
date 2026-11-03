"use client";

import { useState } from "react";

const kelasInput =
  "mt-1 w-full rounded-lg border border-gray-300 bg-white dark:bg-gray-800 p-2";

export default function FormKontak() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});

  function kirim(e) {
    e.preventDefault();
    const errorBaru = {};

    if (nama.trim() === "") {
      errorBaru.nama = "Nama wajib diisi.";
    }

    if (!email.includes("@")) {
      errorBaru.email =
        "Email harus memuat tanda @, contoh nama@gmail.com.";
    }

    setError(errorBaru);
  }

  return (
    <form onSubmit={kirim} noValidate className="space-y-4">
      <div>
        <label htmlFor="nama" className="block font-semibold">
          Nama lengkap
        </label>
        <input
          type="text"
          id="nama"
          name="nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Contoh: Budi Santoso"
          className={kelasInput}
        />
        {error.nama && (
          <p className="mt-1 text-sm text-aksen">{error.nama}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="nama@gmail.com"
          className={kelasInput}
        />
        {error.email && (
          <p className="mt-1 text-sm text-aksen">{error.email}</p>
        )}
      </div>

      {/* Nomor HP */}
      <div>
        <label htmlFor="nomor" className="block text-sm font-semibold text-gray-800 dark:text-gray-100">
          Nomor HP
        </label>
        <input
          type="tel"
          id="nomor"
          name="nomor"
          placeholder="081234567890"
          required
          className={kelasInput}
        />
      </div>

      {/* Keperluan */}
      <div>
        <label htmlFor="keperluan" className="block text-sm font-semibold text-gray-800 dark:text-gray-100">
          Keperluan
        </label>
        <select
          id="keperluan"
          name="keperluan"
          required
          defaultValue=""
          className={kelasInput}
        >
          <option value="" disabled>
            -- Pilih keperluan --
          </option>
          <option value="Pertanyaan">Pertanyaan</option>
          <option value="Kerja Sama">Kerja Sama</option>
          <option value="Proyek">Proyek</option>
          <option value="Lainnya">Lainnya</option>
        </select>
      </div>

      {/* Pesan */}
      <div>
        <label htmlFor="pesan" className="block text-sm font-semibold text-gray-800 dark:text-gray-100">
          Pesan
        </label>
        <textarea
          id="pesan"
          name="pesan"
          rows={5}
          placeholder="Tulis pesanmu di sini"
          required
          className={kelasInput}
        />
      </div>

      {/* Tombol */}
      <button
        type="submit"
        className="rounded-lg bg-[#c51e32] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#a81729]"
      >
        Kirim Pesan
      </button>

      <p className="text-xs leading-relaxed text-gray-500">
        Form ini belum mengirim pesan. Pengiriman pesan
        diaktifkan di Minggu 15.
      </p>
    </form>
  );
}