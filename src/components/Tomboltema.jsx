"use client";

import { useSyncExternalStore } from "react";

function berlangganan(callback) {
  window.addEventListener("tema-berubah", callback);

  return () => {
    window.removeEventListener("tema-berubah", callback);
  };
}

function ambilTema() {
  return document.documentElement.classList.contains("dark");
}

function ambilTemaServer() {
  return false;
}

export default function TombolTema() {
  const gelap = useSyncExternalStore(
    berlangganan,
    ambilTema,
    ambilTemaServer
  );

  function gantiTema() {
    document.documentElement.classList.toggle("dark", !gelap);
    window.dispatchEvent(new Event("tema-berubah"));
  }

  return (
    <button
      type="button"
      onClick={gantiTema}
      aria-pressed={gelap}
      className="rounded-lg border border-white px-3 py-1 text-sm font-semibold text-white hover:border-aksen hover:bg-aksen"
    >
      {gelap ? "Mode Terang" : "Mode Gelap"}
    </button>
  );
}